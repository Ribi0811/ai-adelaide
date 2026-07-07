# AI Adelaide — v3 Design Language (single source of truth)

Every new or migrated page follows this. When in doubt: quieter, lighter, fewer.

## Color
- Canvas `#FBFBFD` · Strip `#F5F5F7` · Card `#FFFFFF`
- Ink `#1D1D1F` (headings) · Sub `#6E6E73` · Faint `#98989D`
- Accent (ONE per page family): teal `#0E8C74` (hover `#0C7A65`), bright glow `#5EF2D6` at ≤20% opacity for blooms only
- Alert/loss ONLY: orange `#FF6B35` / `#E8590C` / `#FF8A5C` (missed calls, leak numbers)
- One dark moment per page max: `#101013` or `#1D1D1F` panel
- Hairlines: `border-black/[0.06]`, hover `black/[0.12]`

## Type
- Font: Manrope (sans) everywhere; JetBrains Mono for eyebrows/status only. Two weights: 400, 600 (semibold). Never 700+ except mock-site content.
- H1 44/76px, H2 36/48px (`text-4xl md:text-5xl`), tracking `-0.02em`—`-0.03em`, leading ≤1.1
- Body 15–17px `#6E6E73`, leading relaxed. Numbers: `tabular-nums`
- Numbered eyebrows: `font-mono text-[13px] font-semibold tracking-[0.08em]` accent color, `NN — Label`
- One typographic MOMENT per page (oversized number or word, 64–100px)

## Shape & depth
- Pills for all buttons (`rounded-full`, px-8 py-4 primary / px-6 py-3 small)
- Cards `rounded-[28px]`, product frames `rounded-[20px]`
- Shadows: resting `0_2px_12px_rgba(29,29,31,0.05)` · floating product `0_30px_90px_rgba(29,29,31,0.16)` · teal CTA hover `0_12px_32px_rgba(14,140,116,0.35)`
- Blooms: accent at 16–20% opacity, blur 80–120px, behind heroes/CTAs only

## Motion (one language)
- Reveal: 16px fade-up, 0.55s, `cubic-bezier(0.21,0.6,0.35,1)`, once, stagger 0.12s
- Hero entrance: same curve via `.v3-rise`, delays 0/.12/.24/.36/.48s
- Hovers: `-translate-y-0.5` + shadow; presses `scale(0.98)`
- Everything respects `prefers-reduced-motion` (jump to final state)

## Voice
- Confident, plain, Australian. Short sentences. Outcomes before features.
- AI = the reason for speed/price ("built with AI behind the scenes"), never the product name
- Prices said out loud; anchor against the $3–5k agency norm
- Humans visible: "A human replies within 2 business hours", founder line
- Never: "solutions", "leverage", "unlock", "seamless", exclamation marks

## Hard rules
- One accent-filled CTA per viewport · one dark section per page · no carousels that move the H1 · crawlable text/links behind every visual (map → `<ul>`) · photos ≤150KB with Ken Burns only above the fold · real claims only, else HUMAN INPUT marker
