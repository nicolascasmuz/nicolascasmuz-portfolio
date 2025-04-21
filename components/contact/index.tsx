import styles from "./contact.module.css";

export default function Contact() {
  return (
    <section className={styles["section-form"]}>
      <h2 className={styles["section-form__title"]}>Contacto</h2>
      <form className={styles["section-form__form"]}>
        <label htmlFor="nombre" className={styles["section-form__label"]}>
          <h3 className={styles["section-form__h3"]}>NOMBRE</h3>
          <input
            type="text"
            className={styles["section-form__input"]}
            id="nombre"
            name="nombre"
          />
        </label>
        <label htmlFor="email" className={styles["section-form__label"]}>
          <h3 className={styles["section-form__h3"]}>EMAIL</h3>
          <input
            type="email"
            className={styles["section-form__input"]}
            id="email"
            name="email"
          />
        </label>
        <label htmlFor="mensaje" className={styles["section-form__label"]}>
          <h3 className={styles["section-form__h3"]}>MENSAJE</h3>
          <textarea
            className={styles["section-form__textarea"]}
            id="mensaje"
            name="mensaje"
          ></textarea>
        </label>
        <button className={styles["section-form__button"]}>Enviar</button>
      </form>
    </section>
  );
}
