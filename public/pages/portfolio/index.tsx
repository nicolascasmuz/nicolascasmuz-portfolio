import { useState, useEffect } from "react";
import styles from "./portfolio.module.css";
import Image from "next/image";
import type { NextPage } from "next";
import Layout from "components/layout";
import fondo03 from "resources/fondo03_green.png";
import DevProjects from "components/dev-projects";
import AvProjects from "components/av-projects";
import GraphProjects from "components/graph-projects";

interface devProject {
  pic: string;
  h3: string;
  p: string;
  a: string;
  ingresar: string;
}

interface otherProject {
  pic: string;
  h3: string;
  p: string;
  a: string;
}

const Portfolio: NextPage = () => {
  const [devProject, setDevProjects] = useState([]);
  const [avProject, setAvProjects] = useState([]);
  const [graphProject, setGraphProjects] = useState([]);

  function pullRequest() {
    return fetch(
      "https://preview.contentful.com/spaces/boc2rp8m0dgi/environments/master/entries?access_token=Y1_N0gShtcshwQbkaOPc2u0lA-7zD8351Q0NWQCRCsU&&content_type=projectsForPortfolio"
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const dev: devProject[] = [];
        const av: otherProject[] = [];
        const graph: otherProject[] = [];

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
          if (fields.cat === "av") {
            av.push(project);
          }
          if (fields.cat === "graph") {
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
    <Layout footerTheme={true}>
      <section className={styles["portfolio-top"]}>
        <Image
          src={fondo03}
          alt="Fondo portfolio"
          fill
          priority
          style={{ objectFit: "cover", zIndex: -1 }}
        />
        <section className={styles["portfolio-top__below"]}>
          <h1 className={styles["portfolio-top__title"]}>Portfolio</h1>
        </section>
      </section>
      <DevProjects projects={devProject} />
      <AvProjects projects={avProject} />
      <GraphProjects projects={graphProject} />
    </Layout>
  );
};

export default Portfolio;
