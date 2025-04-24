import { useState, useEffect } from "react";
import styles from "./dev-projects.module.css";

export default function DevProjects() {
  const [devProject, setDevProjects] = useState([]);

  function pullRequest() {
    return fetch(
      "https://preview.contentful.com/spaces/boc2rp8m0dgi/environments/master/entries?access_token=Y1_N0gShtcshwQbkaOPc2u0lA-7zD8351Q0NWQCRCsU&&content_type=projectsForPortfolio"
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const dev: any[] = [];

        for (let i = 0; i < data["items"].length; i++) {
          const fields = data.items[i].fields;
          const project = {
            pic: fields.pic,
            h3: fields.nombre,
            p: fields.descripcion,
            a: fields.link,
            ingresar: fields.play,
          };

          if (fields.cat === "dev") {
            dev.push(project);
          }
        }

        setDevProjects(dev);
      });
  }

  useEffect(() => {
    pullRequest();
  }, []);

  return (
    <section className={styles["section-dev"]}>
      <h2 className={styles["section-portfolio__title"]}>Desarrollo Web</h2>
      {devProject.map((p) => {
        return (
          <div className={styles["section-portfolio__container"]}>
            <img
              src={p.pic}
              alt="img-project"
              className={styles["section-portfolio__img"]}
            />
            <h3 className={styles["section-portfolio__h3"]}>{p.h3}</h3>
            <p className={styles["section-portfolio__p"]}>{p.p}</p>
            <div className={styles["section-portfolio__link-container"]}>
              <a href={p.a} className={styles["section-portfolio__a"]}>
                Ver repo
              </a>
              <a href={p.ingresar} className={styles["section-portfolio__a"]}>
                Ingresar
              </a>
            </div>
          </div>
        );
      })}
    </section>
  );
}
