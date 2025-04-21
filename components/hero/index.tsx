import Image from "next/image";
import styles from "./hero.module.css";
import fondo01 from "resources/fondo01_blue.png";

export default function Hero() {
  return (
    <main className={styles["welcome"]}>
      <Image
        src={fondo01}
        alt="Fondo de bienvenida"
        fill
        priority
        style={{ objectFit: "cover", zIndex: -1 }}
      />
      <section className={styles["welcome__section-below"]}>
        <h1 className={styles["welcome__title"]}>
          <span className={styles["welcome__title-span"]}>Bienvenido a</span>
          LG7 MULTIMEDIA
        </h1>
      </section>
    </main>
  );
}
