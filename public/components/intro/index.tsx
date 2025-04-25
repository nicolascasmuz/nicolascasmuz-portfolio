import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./intro.module.css";
import fondoTextura from "resources/fondo-textura-abstracta.jpeg";

interface Intro {
  title: string;
  introduction: string;
  img: string;
}

export default function Intro() {
  const [intro, setIntro] = useState<Intro | null>(null);

  function pullRequest() {
    return fetch(
      "https://preview.contentful.com/spaces/boc2rp8m0dgi/environments/master/entries?access_token=Y1_N0gShtcshwQbkaOPc2u0lA-7zD8351Q0NWQCRCsU&&content_type=introForPortfolio"
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        for (let i = 0; i < data["items"].length; i++) {
          const intro = {
            title: data.items[i].fields.titulo,
            introduction: data.items[i].fields.texto,
            img: data.includes.Asset[i].fields.file.url,
          };
          setIntro(intro);
        }
      });
  }

  useEffect(() => {
    pullRequest();
  }, []);

  return (
    <section className={styles["section-intro"]}>
      <Image
        src={fondoTextura}
        alt="Fondo textura"
        fill
        priority
        style={{ objectFit: "cover", zIndex: -1 }}
      />
      <div className={styles["section-intro__container"]}>
        <h2 className={styles["section-intro__title"]}>{intro?.title}</h2>
        <p className={styles["section-intro__introduction"]}>
          {intro?.introduction}
        </p>
        <img
          className={styles["section-intro__foto"]}
          src={intro?.img}
          alt="foto-personal"
        />
      </div>
    </section>
  );
}
