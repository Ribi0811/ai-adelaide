"use client";

import Image from "next/image";
import { useState } from "react";
import { selectedWork } from "@/lib/portfolio";
import styles from "./studio.module.css";

export default function WorkShowcase() {
  const [active, setActive] = useState(0);

  return (
    <div className={styles.showcase}>
      <div className={styles.showcaseStage}>
        <div className={styles.showcasePlane} aria-hidden />
        <div className={styles.showcaseOutline} aria-hidden />
        <div className={styles.showcaseHeader}><span>Selected work</span><a href="#selected-work" data-track="home_featured_work">About the projects ↗</a></div>
        <div className={styles.showcaseScreens} id="featured-project" aria-live="polite">
          {selectedWork.map((project, index) => (
            <div key={project.name} hidden={active !== index} className={styles.showcaseProject}>
              <a href={project.url} target="_blank" rel="noopener noreferrer"
                aria-label={`Visit ${project.name} in a new tab`} data-track={`home_featured_work_${index}`}>
                <div className={styles.showcaseBrowser}><span>{project.name}</span><span aria-hidden>↗</span></div>
                <Image src={project.screenshotSrc} alt={project.screenshotAlt} width={1440} height={900}
                  priority={index === 0} sizes="(max-width: 760px) 95vw, 55vw" />
              </a>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.showcaseChoices} aria-label="Choose a featured project">
        {selectedWork.map((project, index) => <button key={project.name} type="button"
          aria-pressed={active === index} aria-controls="featured-project"
          onClick={() => setActive(index)} data-track={`home_project_select_${index}`}>
          <span className={styles.projectNumber} aria-hidden>{String(index + 1).padStart(2, "0")}</span>
          <span>{project.name}</span><span aria-hidden>↗</span>
        </button>)}
      </div>
    </div>
  );
}
