import { useState, useEffect } from "react";
import styles from "./av-projects.module.css";

export default function AvProjects({ projects }) {
  return (
    <section className={styles["section-av"]}>
      <h2 className={styles["section-portfolio__title"]}>
        Edición y Animación
      </h2>
      {projects.map((p, index) => {
        return (
          <div className={styles["section-portfolio__container"]} key={index}>
            <iframe
              className={styles["section-portfolio__video"]}
              src={p.pic}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
            <h3 className={styles["section-portfolio__h3"]}>{p.h3}</h3>
            <p className={styles["section-portfolio__p"]}>{p.p}</p>
            <div className={styles["section-portfolio__link-container"]}>
              <a href={p.a} className={styles["section-portfolio__a"]}>
                Ingresar
              </a>
            </div>
          </div>
        );
      })}
    </section>
  );
}
