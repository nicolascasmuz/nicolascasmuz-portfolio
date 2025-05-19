import styles from "./graph-projects.module.css";

export default function GraphProjects({ projects }) {
  return (
    <section className={styles["section-av"]}>
      <h2 className={styles["section-portfolio__title"]}>Diseño gráfico</h2>
      {projects.map((p) => {
        return (
          <div className={styles["section-portfolio__container"]}>
            <img
              src={p.pic}
              alt="img-project"
              className={styles["section-portfolio__img"]}
            ></img>
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
