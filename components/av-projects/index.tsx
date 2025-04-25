import { useState, useEffect } from "react";
import styles from "./av-projects.module.css";

interface avProject {
  pic: string;
  h3: string;
  p: string;
  a: string;
}

export default function AvProjects() {
  const [avProject, setAvProjects] = useState([]);

  function pullRequest() {
    return fetch(
      "https://preview.contentful.com/spaces/boc2rp8m0dgi/environments/master/entries?access_token=Y1_N0gShtcshwQbkaOPc2u0lA-7zD8351Q0NWQCRCsU&&content_type=projectsForPortfolio"
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const av: avProject[] = [];

        for (let i = 0; i < data["items"].length; i++) {
          const fields = data.items[i].fields;
          const project = {
            pic: fields.pic,
            h3: fields.nombre,
            p: fields.descripcion,
            a: fields.link,
          };

          if (fields.cat === "av") {
            av.push(project);
          }
        }

        setAvProjects(av);
      });
  }

  useEffect(() => {
    pullRequest();
  }, []);

  return (
    <section className={styles["section-av"]}>
      <h2 className={styles["section-portfolio__title"]}>
        Edición y Animación
      </h2>
      {avProject.map((p) => {
        return (
          <div className={styles["section-portfolio__container"]}>
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
