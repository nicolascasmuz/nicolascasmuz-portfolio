import Image from "next/image";
import styles from "./intro.module.css";
import profilePhoto from "resources/foto-para-cv.png";
import fondoTextura from "resources/fondo-textura-abstracta.jpeg";

export default function Intro() {
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
        <h2 className={styles["section-intro__title"]}></h2>
        <p className={styles["section-intro__introduction"]}>
          Mi nombre es Nicolás Franco Casmuz, soy realizador audiovisual
          egresado de la UAI. Ejerzo principalmente en el ámbito multimedial
          desempeñándome en áreas como edición de video y diseño gráfico.
          Trabajo hace varios años como freelance para pymes y figuras públicas
          creando material gráfico y audiovisual para sus redes sociales.
          Actualmente me encuentro cursando la carrera de Desarrollo de
          Software.
        </p>
        <Image
          className={styles["section-intro__foto"]}
          src={profilePhoto}
          alt="foto-personal"
          width={200}
          height={200}
        />
      </div>
    </section>
  );
}
