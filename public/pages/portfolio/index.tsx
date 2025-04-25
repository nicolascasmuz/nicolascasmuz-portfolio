import { useState, useEffect } from "react";
import styles from "./portfolio.module.css";
import Image from "next/image";
import type { NextPage } from "next";
import Layout from "components/layout";
import fondo03 from "resources/fondo03_green.png";
import DevProjects from "components/dev-projects";
import AvProjects from "components/av-projects";

const Portfolio: NextPage = () => {
  const [devProject, setDevProjects] = useState([]);
  const [avProject, setAvProjects] = useState([]);

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
          }
        }

        setDevProjects(dev);
        setAvProjects(av);
      });
  }

  useEffect(() => {
    pullRequest();
  }, []);

  return (
    <Layout footerTheme={true}>
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
      <DevProjects />
      <AvProjects />
    </Layout>
  );
};

export default Portfolio;
