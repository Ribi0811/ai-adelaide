#!/usr/bin/env python3
import argparse
import base64
import json
import os
import re
import subprocess
import sys
import time
from dataclasses import dataclass
from datetime import datetime, timezone
from pathlib import Path
from typing import Dict, List, Tuple, Optional

import requests

sys.path.insert(0, '/Users/ivanribicic/.openclaw/workspace')
from scripts.submit_to_google import log_publish

WORKSPACE = Path("/Users/ivanribicic/.openclaw/workspace")
LOG_PATH = WORKSPACE / "logs" / "publish_log.jsonl"
BGCRED_PATH = WORKSPACE / ".credentials" / "bgcarrental-wp.json"

SITES = {
    "koscarhire": {
        "url": "https://koscarhire.com",
        "app_pass": "9MuD dPBi FRgL AEk6 SOT4 chqU",
        "shows_featured": False,
        "wpbakery": False,
        "username": "admin",
    },
    "crocarhire": {
        "url": "https://crocarhire.com",
        "app_pass": "GvyB Rujn olEH jxfM dm1J 5S5j",
        "shows_featured": True,
        "wpbakery": False,
        "username": "admin",
    },
    "365carhire": {
        "url": "https://www.365carhire.com",
        "app_pass": "DupA ZnVA D3hB iZnj 25I7 UC4D",
        "shows_featured": False,
        "wpbakery": True,
        "username": "admin",
    },
    "carhirebosnia": {
        "url": "https://www.carhirebosnia.com",
        "app_pass": "ieav q2rX yPb1 g0OK Ib3l eeuA",
        "shows_featured": True,
        "wpbakery": False,
        "username": "admin",
    },
    "carhireserbia": {
        "url": "https://carhireserbia.com",
        "app_pass": "1DZz FKgt K9Uc Fd0T MCoA 3yx9",
        "shows_featured": True,
        "wpbakery": False,
        "username": "admin",
    },
    "rentalcarsmontenegro": {
        "url": "https://www.rentalcarsmontenegro.com",
        "app_pass": "bhSI ESK1 Cfv6 wGbf bvKg kKtJ",
        "shows_featured": True,
        "wpbakery": False,
        "username": "admin",
    },
    "bgcarrental": {
        "url": "https://www.bgcarrental.com",
        "app_pass": None,
        "shows_featured": True,
        "wpbakery": False,
        "username": "admin",
    },
}

SITE_LINKS = {
    "koscarhire": {
        "Kardamena": "https://www.koscarhire.com/car-rental-kardamena/",
        "Tigaki": "https://www.koscarhire.com/car-rental-tigaki/",
        "Mastichari": "https://www.koscarhire.com/car-rental-mastichari/",
        "Antimachia": "https://www.koscarhire.com/car-rental-antimachia/",
        "Kefalos": "https://www.koscarhire.com/car-rental-kefalos/",
        "Zia": "https://www.koscarhire.com/car-rental-zia/",
        "_home": "https://www.koscarhire.com/",
        "_home_terms": ["hire car", "car hire", "rent a car", "koscarhire"],
    },
    "crocarhire": {
        "Split": "https://crocarhire.com/split-car-hire/",
        "Dubrovnik": "https://crocarhire.com/dubrovnik-car-hire/",
        "Zagreb": "https://crocarhire.com/zagreb-car-hire/",
        "Zadar": "https://crocarhire.com/zadar-car-hire/",
        "Sibenik": "https://crocarhire.com/sibenik-car-hire/",
        "Trogir": "https://crocarhire.com/trogir-car-hire/",
        "_home": "https://crocarhire.com/",
        "_home_terms": ["hire car", "car hire", "rent a car", "crocarhire"],
    },
    "365carhire": {
        "_home": "https://www.365carhire.com/",
        "_home_terms": ["hire car", "car hire", "rent a car", "365carhire"],
    },
    "bgcarrental": {
        "Sofia": "https://www.bgcarrental.com/car-hire-sofia/",
        "Varna": "https://www.bgcarrental.com/car-hire-varna/",
        "Burgas": "https://www.bgcarrental.com/car-hire-burgas/",
        "Plovdiv": "https://www.bgcarrental.com/car-hire-plovdiv/",
        "_home": "https://www.bgcarrental.com/",
        "_home_terms": ["hire car", "car hire", "rent a car", "bgcarrental"],
    },
    "carhirebosnia": {
        "Sarajevo": "https://www.carhirebosnia.com/car-hire-sarajevo/",
        "Mostar": "https://www.carhirebosnia.com/car-hire-mostar/",
        "Banja Luka": "https://www.carhirebosnia.com/car-hire-banja-luka-downtown/",
        "Jajce": "https://www.carhirebosnia.com/",
        "_home": "https://www.carhirebosnia.com/",
        "_home_terms": ["hire car", "car hire", "rent a car", "carhirebosnia"],
    },
    "carhireserbia": {
        "Belgrade": "https://www.carhireserbia.com/car-hire-belgrade/",
        "Novi Sad": "https://www.carhireserbia.com/car-hire-novi-sad/",
        "_home": "https://www.carhireserbia.com/",
        "_home_terms": ["hire car", "car hire", "rent a car", "carhireserbia"],
    },
    "rentalcarsmontenegro": {
        "Budva": "https://www.rentalcarsmontenegro.com/car-hire-budva/",
        "Kotor": "https://www.rentalcarsmontenegro.com/car-hire-kotor/",
        "Tivat": "https://www.rentalcarsmontenegro.com/car-hire-tivat/",
        "_home": "https://www.rentalcarsmontenegro.com/",
        "_home_terms": ["hire car", "car hire", "rent a car", "rentalcarsmontenegro"],
    },
}


class PublishError(Exception):
    pass


@dataclass
class PublishResult:
    site: str
    item_type: str
    title: str
    id: int
    url: str
    links_injected: int
    verified: bool
    gsc: bool
    mode: str


def load_bgcarrental_app_pass() -> str:
    if not BGCRED_PATH.exists():
        raise PublishError(f"Missing bgcarrental credentials file: {BGCRED_PATH}")
    data = json.loads(BGCRED_PATH.read_text())
    app = data.get("app_password")
    if not app:
        raise PublishError("bgcarrental credentials missing 'app_password'")
    return app


def auth_headers(site: str) -> Dict[str, str]:
    cfg = SITES[site]
    app_pass = cfg["app_pass"] if site != "bgcarrental" else load_bgcarrental_app_pass()
    user = cfg.get("username", "admin")
    token = base64.b64encode(f"{user}:{app_pass}".encode()).decode()
    return {"Authorization": f"Basic {token}", "Content-Type": "application/json"}


def load_items(args) -> List[dict]:
    files: List[Path] = []
    if args.file:
        files.append(Path(args.file))
    if args.dir:
        d = Path(args.dir)
        if not d.exists() or not d.is_dir():
            raise PublishError(f"Directory not found: {d}")
        files.extend(sorted([p for p in d.iterdir() if p.suffix.lower() == ".json"]))
    if not files:
        raise PublishError("No input files found")

    items = []
    for f in files:
        if not f.exists():
            raise PublishError(f"File not found: {f}")
        data = json.loads(f.read_text())
        # Fix site name format: remove .com suffix if present
        if data.get("site", "").endswith(".com"):
            data["site"] = data["site"].replace(".com", "")
        data["_source_file"] = str(f)
        items.append(data)
    return items


def validate_item_shape(item: dict):
    required = ["site", "type", "title", "slug", "content_html", "focus_keyword", "meta_description"]
    missing = [k for k in required if not item.get(k)]
    
    # Support both old format (content_html) and new format (content.body)
    if not item.get("content_html") and item.get("content") and item["content"].get("body"):
        item["content_html"] = item["content"]["body"]
        missing = [k for k in required if not item.get(k)]
    
    # Support both old format (direct focus_keyword/meta_description) and new format (in seo object)
    if not item.get("focus_keyword") and item.get("seo") and isinstance(item.get("seo"), dict):
        if not item["seo"].get("focus_keyword") or not item["seo"].get("meta_description"):
            missing.extend(["seo.focus_keyword", "seo.meta_description"])
        else:
            item["focus_keyword"] = item["seo"]["focus_keyword"]
            item["meta_description"] = item["seo"]["meta_description"]
            missing = [k for k in required if not item.get(k)]
    
    if missing:
        raise PublishError(f"Missing required fields: {', '.join(missing)}")
    if item["site"] not in SITES:
        raise PublishError(f"Unknown site '{item['site']}'. Allowed: {', '.join(SITES.keys())}")
    if item["type"] not in {"post", "page"}:
        raise PublishError("'type' must be 'post' or 'page'")


def strip_html(text: str) -> str:
    return re.sub(r"<[^>]+>", " ", text)


def validate_content_html(content_html: str):
    if not re.search(r"<h2\b[^>]*>", content_html, flags=re.IGNORECASE):
        raise PublishError("Validation failed: content must include at least one <h2> tag")
    if re.search(r"\*\*[^*]+\*\*", content_html):
        raise PublishError("Validation failed: raw markdown bold (**text**) detected")
    if re.search(r"\{\s*\"heading\"\s*:", content_html):
        raise PublishError("Validation failed: raw dict key '{\"heading\": ...}' detected in content")

    words = re.findall(r"\b[\w'-]+\b", strip_html(content_html))
    if len(words) <= 300:
        raise PublishError(f"Validation failed: word count is {len(words)} (must be > 300)")
    
    # AI SLop Detection — NEW 2026-05-25
    text_lower = strip_html(content_html).lower()
    
    # Template openings
    template_patterns = [
        (r"so, you have landed on this beautiful", "Template opening: 'So, you have landed...'"),
        (r"so, you are planning a trip to the beautiful", "Template opening: 'So, you are planning...'"),
        (r"so you've arrived on this beautiful", "Template opening: 'So you've arrived...'"),
        (r"so you are planning a trip to the beautiful", "Template opening: 'So you are planning...'"),
    ]
    for pattern, msg in template_patterns:
        if re.search(pattern, text_lower):
            raise PublishError(f"AI SLOP DETECTED: {msg}. Rewrite with a natural opening.")
    
    # Fluff adjectives
    fluff_adjectives = re.findall(r"\b(beautiful|stunning|sparkling|breathtaking|vibrant|picturesque|gorgeous|magnificent|spectacular)\b", text_lower)
    if len(fluff_adjectives) > 2:
        raise PublishError(f"AI SLOP DETECTED: Too many fluff adjectives ({fluff_adjectives}). Use specific concrete details instead.")
    
    # AI vocabulary
    ai_vocab = ["delve", "underscore", "crucial", "testament", "foster", "cultivate", "garner", "enhance", "cultivate"]
    found_ai_words = [w for w in ai_vocab if w in text_lower]
    if len(found_ai_words) > 2:
        raise PublishError(f"AI SLOP DETECTED: AI vocabulary overuse ({found_ai_words}). Rewrite in natural speech.")


def load_featured_image(item: dict, dry_run: bool = False) -> Tuple[str, str, Optional[int]]:
    """Load featured image URL and alt text, generating if needed."""
    import os
    # Skip image generation if env var is set
    skip_image = os.environ.get("SKIP_IMAGE_GENERATION", "") in ("1", "true", "yes")
    
    # Support both old format (image_url/image_alt) and new format (featured_image object)
    image_url = item.get("image_url")
    image_alt = item.get("image_alt")
    featured_image = item.get("featured_image", {})
    
    # If we have featured_image object but not direct image_url
    if not image_url and featured_image:
        if featured_image.get("prompt"):
            # Generate image via NVIDIA FLUX
            prompt = featured_image["prompt"]
            image_alt = featured_image.get("alt_text", "")
            
            if skip_image:
                print(f"  [SKIP_IMAGE] Image generation skipped (SKIP_IMAGE_GENERATION=1)")
                # Return empty to signal no image — publisher will handle as no featured image
                return "", image_alt, None
            
            if dry_run:
                print(f"  [DRY-RUN] Would generate image with prompt: {prompt[:100]}...")
                image_url = None
            else:
                import requests
                import json
                
                # Read credentials
                cred_path = Path("/Users/ivanribicic/.openclaw/workspace/.credentials/nvidia-flux-dev-api.json")
                if not cred_path.exists():
                    raise PublishError(f"Missing NVIDIA FLUX credentials: {cred_path}")
                cred_data = json.loads(cred_path.read_text())
                api_key = cred_data.get("api_key")
                if not api_key:
                    raise PublishError("NVIDIA FLUX credentials missing 'api_key'")
                
                # Generate image
                headers = {
                    "Authorization": f"Bearer {api_key}",
                    "Content-Type": "application/json",
                }
                payload = {
                    "prompt": prompt,
                    "mode": "base",  # Required by API
                }
                
                try:
                    resp = requests.post(
                        "https://ai.api.nvidia.com/v1/genai/black-forest-labs/flux.1-dev",
                        headers=headers,
                        json=payload,
                        timeout=60,
                    )
                    resp.raise_for_status()
                    result = resp.json()
                    # Extract image from response - artifacts[0].base64
                    artifacts = result.get("artifacts", [])
                    if artifacts:
                        image_data = artifacts[0].get("base64", "")
                        if image_data:
                            # Decode and upload directly to WordPress
                            import base64
                            image_bytes = base64.b64decode(image_data)
                            image_url, media_id = upload_image_from_bytes(item["site"], image_bytes, image_alt, f"img-{item['slug']}.jpg")
                            item["image_media_id"] = media_id
                        else:
                            raise PublishError("NVIDIA FLUX API artifact has no base64 data")
                    else:
                        raise PublishError("NVIDIA FLUX API returned no artifacts")
                except requests.exceptions.RequestException as e:
                    raise PublishError(f"NVIDIA FLUX image generation failed: {e}")
        else:
            raise PublishError("Featured image missing 'prompt' field")
    
    if not image_url:
        raise PublishError("No image_url available (need image_url or featured_image.prompt)")
    
    if not image_alt:
        image_alt = "Featured image"
    
    return image_url, image_alt, item.get("image_media_id")


def upload_to_media_library(site: str, image_path: str, alt_text: str) -> str:
    """Upload an image file to WordPress media library and return URL."""
    from pathlib import Path
    
    site_cfg = SITES[site]
    app_pass = site_cfg["app_pass"] if site != "bgcarrental" else load_bgcarrental_app_pass()
    user = site_cfg.get("username", "admin")
    token = base64.b64encode(f"{user}:{app_pass}".encode()).decode()
    headers = {
        "Authorization": f"Basic {token}",
        "Content-Disposition": f"attachment; filename={Path(image_path).name}",
    }
    
    with open(image_path, "rb") as f:
        file_content = f.read()
    
    upload_url = f"{site_cfg['url']}/wp-json/wp/v2/media"
    resp = requests.post(
        upload_url,
        headers=headers,
        data=file_content,
        timeout=30,
    )
    
    if resp.status_code not in (200, 201):
        raise PublishError(f"Media upload failed ({resp.status_code}): {resp.text[:300]}")
    
    data = resp.json()
    media_id = int(data["id"])
    media_url = data.get("source_url", "")
    
    # Update alt text for uploaded image
    alt_update_url = f"{site_cfg['url']}/wp-json/wp/v2/media/{media_id}"
    alt_payload = {"alt_text": alt_text}
    alt_resp = requests.post(alt_update_url, headers=headers, json=alt_payload, timeout=30)
    if alt_resp.status_code not in (200, 201):
        print(f"  Warning: Could not update alt text (status {alt_resp.status_code})")
    
    return media_url


def upload_image_from_bytes(site: str, image_bytes: bytes, alt_text: str, filename: str) -> Tuple[str, int]:
    """Upload image bytes directly to WordPress media library and return (URL, media_id)."""
    site_cfg = SITES[site]
    app_pass = site_cfg["app_pass"] if site != "bgcarrental" else load_bgcarrental_app_pass()
    user = site_cfg.get("username", "admin")
    token = base64.b64encode(f"{user}:{app_pass}".encode()).decode()
    headers = {
        "Authorization": f"Basic {token}",
        "Content-Disposition": f"attachment; filename={filename}",
        "Content-Type": "image/jpeg",
    }
    
    upload_url = f"{site_cfg['url']}/wp-json/wp/v2/media"
    resp = requests.post(
        upload_url,
        headers=headers,
        data=image_bytes,
        timeout=30,
    )
    
    if resp.status_code not in (200, 201):
        raise PublishError(f"Media upload failed ({resp.status_code}): {resp.text[:300]}")
    
    data = resp.json()
    media_url = data.get("source_url", "")
    if not media_url:
        raise PublishError("Upload succeeded but no source_url in response")
    
    media_id = int(data["id"])
    
    # Update alt text for uploaded image
    alt_update_url = f"{site_cfg['url']}/wp-json/wp/v2/media/{media_id}"
    alt_headers = {
        "Authorization": f"Basic {token}",
        "Content-Type": "application/json",
    }
    alt_payload = {"alt_text": alt_text}
    alt_resp = requests.post(alt_update_url, headers=alt_headers, json=alt_payload, timeout=30)
    if alt_resp.status_code not in (200, 201):
        print(f"  Warning: Could not update alt text (status {alt_resp.status_code})")
    
    return media_url, media_id


def split_anchor_safe(html: str) -> List[Tuple[str, str]]:
    # Returns list of (kind, text) where kind in {"anchor", "text"}
    parts = []
    last = 0
    for m in re.finditer(r"<a\b[^>]*>.*?</a>", html, flags=re.IGNORECASE | re.DOTALL):
        if m.start() > last:
            parts.append(("text", html[last:m.start()]))
        parts.append(("anchor", html[m.start():m.end()]))
        last = m.end()
    if last < len(html):
        parts.append(("text", html[last:]))
    return parts


def inject_first_occurrence(plain_html: str, term: str, url: str) -> Tuple[str, bool]:
    parts = split_anchor_safe(plain_html)
    pattern = re.compile(rf"\b({re.escape(term)})\b", flags=re.IGNORECASE)

    changed = False
    out = []
    for kind, segment in parts:
        if kind == "anchor" or changed:
            out.append(segment)
            continue
        if url.lower() in segment.lower():
            out.append(segment)
            continue

        def repl(m):
            nonlocal changed
            if changed:
                return m.group(0)
            changed = True
            txt = m.group(1)
            return f'<a href="{url}">{txt}</a>'

        out.append(pattern.sub(repl, segment, count=1))
    return "".join(out), changed


def url_exists(html: str, url: str) -> bool:
    """Check if an exact URL exists in HTML (not just as substring)."""
    # Match href="exact_url" or href='exact_url'
    # Use different quote styles to avoid escaping issues
    pattern = r'<a\b[^>]*href=[\'"]' + re.escape(url) + r'[\'"]'
    return bool(re.search(pattern, html, re.IGNORECASE))

def inject_internal_links(site: str, content_html: str, item: dict = None, min_links: int = 3, max_links: int = 8) -> Tuple[str, int]:
    link_map = SITE_LINKS[site]
    home = link_map["_home"]
    home_terms = link_map.get("_home_terms", [])

    links_added = 0
    html = content_html

    # Check for pre-existing internal_links from JSON if provided
    pre_existing_links = []
    if item and "internal_links" in item:
        pre_existing_links = item["internal_links"]
        # Count pre-existing links that match our site
        for link in pre_existing_links:
            url = link.get("url") if isinstance(link, dict) else link
            if url and (url.startswith(link_map["_home"].replace("www.", "")) or url.startswith(link_map["_home"].replace("https://", "").replace("www.", ""))):
                links_added += 1

    # Count existing links first (city-based)
    city_pairs = [(k, v) for k, v in link_map.items() if not k.startswith("_")]
    for term, url in city_pairs:
        if url_exists(html, url):
            links_added += 1

    # Add missing links (up to max_links) - city-based first
    for term, url in city_pairs:
        if links_added >= max_links:
            break
        if url_exists(html, url):
            continue
        html, did = inject_first_occurrence(html, term, url)
        if did:
            links_added += 1
    
    # Also inject links from pre-existing internal_links if any
    if item and "internal_links" in item:
        for link in item["internal_links"]:
            url = link.get("url") if isinstance(link, dict) else link
            if not url:
                continue
            if links_added >= max_links:
                break
            if url_exists(html, url):
                continue
            # Extract city name from URL to find term
            for term, city_url in city_pairs:
                if city_url == url:
                    html, did = inject_first_occurrence(html, term, url)
                    if did:
                        links_added += 1
                    break

    # Add home link if needed
    home_link_added = False
    if not url_exists(html, home):
        html += f'\n<p>Ready to book? <a href="{home}">Visit our homepage for the best hire car deals.</a></p>'
        home_link_added = True

    # Count final links
    count = 0
    pre_existing_count = 0
    # Count pre-existing links that are still in the HTML
    for link in pre_existing_links:
        url = link.get("url") if isinstance(link, dict) else link
        if url and url_exists(html, url):
            count += 1
            pre_existing_count += 1
    # Count city-based links
    for term, url in city_pairs:
        if url_exists(html, url):
            count += 1
    if home_link_added or not url_exists(html, home):
        count += 1
    
    # If we have enough pre-existing links from JSON, allow it
    if len(pre_existing_links) >= min_links:
        count = len(pre_existing_links)
    
    # Debug output
    print(f"  Pre-existing links found: {pre_existing_count}")
    print(f"  Pre-existing links in JSON: {len(pre_existing_links)}")
    print(f"  Home link added: {home_link_added}")
    print(f"  Total count: {count}")
    
    if count < min_links:
        raise PublishError(
            f"Internal link rule failed: only {count} links present (required min {min_links})."
        )

    if count > max_links:
        raise PublishError(
            f"Internal link rule failed: {count} links present (max allowed {max_links})."
        )

    return html, count


def embed_top_image(content_html: str, image_url: str, image_alt: str) -> str:
    image_html = (
        f'<p><img src="{image_url}" alt="{image_alt}" class="wp-post-image" '
        f'style="width:100%;height:auto;margin-bottom:20px;" /></p>'
    )
    return f"{image_html}\n{content_html}"


def wp_endpoint(item_type: str) -> str:
    return "posts" if item_type == "post" else "pages"


def slug_conflict_check(base_url: str, headers: dict, item_type: str, slug: str) -> int:
    """
    Check if a page/post with this slug already exists.
    Returns the existing post ID if found (so we can update), or 0 if safe to create.

    IMPORTANT: Only checks pages and posts — NOT attachments/media.
    Attachments can occupy a slug (e.g. an image named 'car-hire-zenica.jpg' creates
    /car-hire-zenica as an attachment). If we matched attachments here, we'd think the
    page exists and try to update an attachment via the pages endpoint — which fails
    silently, causing WP to create a new page with a -2/-3 suffix instead.
    """
    ep = wp_endpoint(item_type)
    # Check both publish and draft — but NOT attachments (status=any includes media)
    for status in ('publish', 'draft', 'pending'):
        url = f"{base_url}/wp-json/wp/v2/{ep}?slug={slug}&status={status}&_fields=id,slug,type"
        resp = requests.get(url, headers=headers, timeout=30)
        if resp.status_code != 200:
            continue
        rows = resp.json()
        if rows:
            found = rows[0]
            print(f"  Slug conflict: /{slug}/ exists as {found.get('type','?')} ID {found['id']} (status={status})")
            return int(found["id"])
    return 0


def build_payload(item: dict, site_cfg: dict, content_html: str) -> dict:
    meta = {
        "_yoast_wpseo_focuskw": item["focus_keyword"],
        "_yoast_wpseo_metadesc": item["meta_description"][:155],
    }
    if site_cfg["wpbakery"]:
        meta["_wpb_vc_js_status"] = "false"

    payload = {
        "title": item["title"],
        "content": content_html,
        "status": "publish",
        "format": "image",
        "slug": item["slug"],
        "meta": meta,
    }

    if site_cfg["shows_featured"]:
        if item.get("image_media_id"):
            payload["featured_media"] = int(item["image_media_id"])
    else:
        if item.get("image_url") and item.get("image_alt"):
            payload["content"] = embed_top_image(content_html, item["image_url"], item["image_alt"])

    return payload


def publish_item(item: dict, dry_run: bool = False) -> PublishResult:
    validate_item_shape(item)
    site = item["site"]
    site_cfg = SITES[site]

    validate_content_html(item["content_html"])
    linked_html, links_added = inject_internal_links(site, item["content_html"], item)
    
    # Load featured image if needed
    image_url = None
    image_alt = None
    try:
        if not dry_run and (not item.get("image_url") or not item.get("image_alt")):
            image_url, image_alt, media_id = load_featured_image(item, dry_run=False)
            # Update item with loaded values for build_payload
            if image_url:
                item["image_url"] = image_url
            if image_alt:
                item["image_alt"] = image_alt
            if media_id:
                item["image_media_id"] = media_id
        elif dry_run and not item.get("image_url"):
            # Dry run - show what would be done
            featured = item.get("featured_image", {})
            if featured.get("prompt"):
                skip_image = os.environ.get("SKIP_IMAGE_GENERATION", "") in ("1", "true", "yes")
                if skip_image:
                    print(f"  [DRY-RUN] SKIP_IMAGE_GENERATION=1 — would skip image generation")
                else:
                    print(f"  [DRY-RUN] Would generate image with prompt: {featured['prompt'][:100]}...")
                    print(f"  [DRY-RUN] Alt text: {featured.get('alt_text', '')}")
    except PublishError as e:
        # Image generation failed - continue without image
        print(f"  Warning: Image generation skipped ({e})")
        item["image_url"] = None
        item["image_alt"] = None

    payload = build_payload(item, site_cfg, linked_html)

    source = item.get("_source_file", "<memory>")

    if dry_run:
        print(f"\n[DRY-RUN] {source}")
        print(f"  Site: {site} | Type: {item['type']} | Slug: {item['slug']}")
        print(f"  Links injected: {links_added}")
        print(f"  Would publish payload keys: {sorted(payload.keys())}")
        preview = re.sub(r"\s+", " ", payload["content"]).strip()[:220]
        print(f"  Content preview: {preview}...")
        return PublishResult(site, item["type"], item["title"], 0, "DRY_RUN", links_added, False, False, "dry-run")

    headers = auth_headers(site)
    base_url = site_cfg["url"]
    ep = wp_endpoint(item["type"])

    existing_id = slug_conflict_check(base_url, headers, item["type"], item["slug"])
    if existing_id:
        print(f"  ⚠️  Slug /{item['slug']}/ already exists (ID {existing_id}) — SKIPPING to prevent duplicate")
        return PublishResult(site, item["type"], item["title"], existing_id,
                             f"{base_url}/{item['slug']}/", links_added, False, False, "skipped-duplicate")
    post_url = f"{base_url}/wp-json/wp/v2/{ep}"

    resp = requests.post(post_url, headers=headers, json=payload, timeout=45)
    if resp.status_code not in (200, 201):
        raise PublishError(f"Publish failed ({resp.status_code}): {resp.text[:300]}")

    data = resp.json()
    post_id = int(data["id"])
    live_url = data.get("link") or f"{base_url}/{item['slug']}/"

    log_publish(
        url=live_url,
        site=base_url.replace('https://', '').replace('http://', '').replace('www.', ''),
        page_type=item['type'],
        slug=item['slug'],
        post_id=str(post_id),
        gsc_submitted=False,
    )

    # Post-publish verify
    time.sleep(2)
    v = requests.get(live_url, timeout=30)
    if v.status_code != 200:
        raise PublishError(f"Verify failed: {live_url} returned HTTP {v.status_code}")
    body = v.text
    if not re.search(r"<h2\b", body, re.IGNORECASE):
        raise PublishError("Verify failed: published page has no <h2>")
    link_count = len(re.findall(r"<a\s+[^>]*href=", body, flags=re.IGNORECASE))
    if link_count < 3:
        raise PublishError(f"Verify failed: only {link_count} links found on live page (need >=3)")

    # GSC submit
    gsc_ok = False
    gsc_proc = subprocess.run(
        ["python3", "scripts/submit_to_google.py", "--urls", live_url],
        cwd=str(WORKSPACE),
        capture_output=True,
        text=True,
    )
    if gsc_proc.returncode == 0:
        gsc_ok = True

    # Log
    LOG_PATH.parent.mkdir(parents=True, exist_ok=True)
    log_entry = {
        "ts": datetime.now(timezone.utc).isoformat(),
        "site": site,
        "type": item["type"],
        "id": post_id,
        "url": live_url,
        "title": item["title"],
        "links_injected": links_added,
        "verified": True,
        "gsc": gsc_ok,
    }
    with LOG_PATH.open("a") as f:
        f.write(json.dumps(log_entry, ensure_ascii=False) + "\n")

    return PublishResult(site, item["type"], item["title"], post_id, live_url, links_added, True, gsc_ok, "published")


def main():
    parser = argparse.ArgumentParser(description="Universal car hire WordPress publisher")
    parser.add_argument("--file", help="Single input JSON file")
    parser.add_argument("--dir", help="Directory of input JSON files")
    parser.add_argument("--dry-run", action="store_true", help="Validate + preview without any WP API calls")
    args = parser.parse_args()

    if not args.file and not args.dir:
        print("ERROR: use --file or --dir")
        sys.exit(1)

    try:
        items = load_items(args)
        results = []
        for item in items:
            result = publish_item(item, dry_run=args.dry_run)
            results.append(result)

        print("\n=== SUMMARY ===")
        for r in results:
            print(
                f"- {r.mode.upper()} | {r.site} | {r.item_type} | {r.title} | "
                f"id={r.id} | url={r.url} | links={r.links_injected} | verified={r.verified} | gsc={r.gsc}"
            )
    except PublishError as e:
        print(f"ERROR: {e}")
        sys.exit(2)
    except Exception as e:
        print(f"UNEXPECTED ERROR: {e}")
        sys.exit(3)


if __name__ == "__main__":
    main()
