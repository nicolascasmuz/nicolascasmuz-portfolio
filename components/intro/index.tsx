import Image from "next/image";
import styles from "./intro.module.css";
import profilePhoto from "resources/foto-carnet.png";
import fondoTextura from "resources/fondo-textura-abstracta.jpeg";

export default function Intro() {
  return (
    <section className={styles["section-intro"]}>
      <div className={styles["section-intro__container"]}>
        <Image
          src={fondoTextura}
          alt="Fondo textura"
          fill
          priority
          style={{ objectFit: "cover", zIndex: -1 }}
        />
        <h2 className={styles["section-intro__title"]}></h2>
        <p className={styles["section-intro__introduction"]}></p>
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
