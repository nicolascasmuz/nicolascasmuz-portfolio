import { useState, useEffect } from "react";
import styles from "./portfolio.module.css";
import Image from "next/image";
import type { NextPage } from "next";
import Layout from "components/layout";
import fondo03 from "resources/fondo03_green.png";

const Portfolio: NextPage = () => {
  const [devProject, setDevProjects] = useState([]);
  const [avProject, setAvProjects] = useState([]);
  const [graphProject, setGraphProjects] = useState([]);

  console.log("devProject: ", devProject);
  console.log("avProject: ", avProject);
  console.log("graphProject: ", graphProject);

  function pullRequest() {
    return fetch(
      "https://preview.contentful.com/spaces/boc2rp8m0dgi/environments/master/entries?access_token=Y1_N0gShtcshwQbkaOPc2u0lA-7zD8351Q0NWQCRCsU&&content_type=projectsForPortfolio"
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const dev: any[] = [];
        const av: any[] = [];
        const graph: any[] = [];

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
          } else if (fields.cat === "av") {
            av.push(project);
          } else if (fields.cat === "graph") {
            graph.push(project);
          }
        }

        setDevProjects(dev);
        setAvProjects(av);
        setGraphProjects(graph);
      });
  }

  useEffect(() => {
    pullRequest();
  }, []);

  return (
    <Layout>
      <section className={styles["portfolio-top"]}>
        <Image
          src={fondo03}
          alt="Fondo portfolio"
          fill
          priority
          style={{ objectFit: "cover", zIndex: -1 }}
        />
        <div className={styles["header-comp"]}></div>
        <section className={styles["portfolio-top__below"]}>
          <h1 className={styles["portfolio-top__title"]}>Portfolio</h1>
        </section>
      </section>
      <section className={styles["section-dev"]}>
        <h2 className={styles["section-portfolio__service"]}>Desarrollo Web</h2>
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
      <section className={styles["section-av"]}>
        <h2 className={styles["section-portfolio__service"]}>
          Edición y Animación
        </h2>
        {avProject.map((p) => {
          return (
            <div className={styles["section-portfolio__container"]}>
              <iframe
                className={styles["section-portfolio__video"]}
                src={p.pic}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
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
      <section className={styles["section-graph"]}>
        <h2 className={styles["section-portfolio__service"]}>Diseño Gráfico</h2>
        <p className={styles["section-portfolio__subtitle"]}>
          Creación de material gráfico para redes sociales de emprendimientos y
          figuras públicas.
        </p>
        {graphProject.map((p) => {
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
                  Ingresar
                </a>
              </div>
            </div>
          );
        })}{" "}
      </section>
    </Layout>
  );
};

export default Portfolio;
