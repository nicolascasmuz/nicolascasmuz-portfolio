import Image from "next/image";
import styles from "./services.module.css";
import webDevelopmentPic from "resources/web-development.jpg";
import videoEditingPic from "resources/video-editing.jpg";
import graphicDesignPic from "resources/graphic-design.jpg";

export default function Services() {
  return (
    <section className={styles["section-services"]}>
      <h2 className={styles["section-services__title"]}>Servicios</h2>
      <div className={styles["section-services__container"]}>
        <Image
          src={webDevelopmentPic}
          alt="img-service"
          className={styles["section-services__img"]}
        />
        <h3 className={styles["section-services__h3"]}>Desarrollo web</h3>
        <p className={styles["section-services__p"]}>
          Poseo conocimientos en Desarrollo de Software, especialmente en el
          ámbito frontend. Manejo lenguajes como Javascript, HTML y CSS,
          bibliotecas como React, y además, también he realizado proyectos con
          bases de datos SQL, Firebase y CMS.
        </p>
      </div>
      <div className={styles["section-services__container"]}>
        <Image
          src={videoEditingPic}
          alt="img-service"
          className={styles["section-services__img"]}
        />
        <h3 className={styles["section-services__h3"]}>Edición y animación</h3>
        <p className={styles["section-services__p"]}>
          Soy Lic. en Realización Audiovisual y me desempeño particularmente en
          el área de postproducción llevando a cabo trabajos de edición de video
          y motion graphics. Poseo experiencia en Adobe Premiere, After Effects
          y Audition.
        </p>
      </div>
      <div className={styles["section-services__container"]}>
        <Image
          src={graphicDesignPic}
          alt="img-service"
          className={styles["section-services__img"]}
        />
        <h3 className={styles["section-services__h3"]}>Diseño gráfico</h3>
        <p className={styles["section-services__p"]}>
          Realizo trabajos de diseño gráfico como flyers, banners, logos y todo
          lo relacionado con material gráfico para redes sociales. Manejo
          programas de diseño y tratamiento de imagen como Photoshop,
          Illustrator y Lightroom.
        </p>
      </div>
    </section>
  );
}
