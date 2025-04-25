import styles from "./contact.module.css";
import { useState } from "react";
import { sendMail } from "lib/api";
import { useRouter } from "next/navigation";

export default function Contact() {
  const router = useRouter();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  async function handleSubmit(e) {
    e.preventDefault();

    const mail = {
      name: form.name,
      email: form.email,
      message: form.message,
    };

    console.log("mail 1: ", mail);

    if (mail.name && mail.email && mail.message) {
      console.log("mail 2: ", mail);
      await sendMail(mail);
      router.push("/message-sent");
    }
  }

  return (
    <section className={styles["section-form"]}>
      <h2 className={styles["section-form__title"]}>Contacto</h2>
      <form className={styles["section-form__form"]} onSubmit={handleSubmit}>
        <label htmlFor="nombre" className={styles["section-form__label"]}>
          <h3 className={styles["section-form__h3"]}>NOMBRE</h3>
          <input
            type="text"
            className={styles["section-form__input"]}
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="email" className={styles["section-form__label"]}>
          <h3 className={styles["section-form__h3"]}>EMAIL</h3>
          <input
            type="email"
            className={styles["section-form__input"]}
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="mensaje" className={styles["section-form__label"]}>
          <h3 className={styles["section-form__h3"]}>MENSAJE</h3>
          <textarea
            className={styles["section-form__textarea"]}
            id="message"
            name="message"
            onChange={handleChange}
          />
        </label>
        <button className={styles["section-form__button"]}>Enviar</button>
      </form>
    </section>
  );
}
