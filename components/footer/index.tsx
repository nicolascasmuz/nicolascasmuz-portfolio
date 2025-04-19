import styles from "./footer.module.css";
import Image from "next/image";
import logo_lg7 from "resources/logo-lg7.png";
import logo_linkedin from "resources/linkedin.png";
import logo_instagram from "resources/instagram.png";
import logo_github from "resources/github.png";
import logo_youtube from "resources/youtube.png";

export default function Footer() {
  return (
    <footer className={styles["footer"]}>
      <Image
        src={logo_lg7}
        alt="logo-lg7"
        width={100}
        height={100}
        className={styles["footer__logo"]}
      />
      <div className={styles["footer__social-media-container"]}>
        <a
          href="https://www.linkedin.com/in/nicolascasmuz/"
          className={styles["footer__social-media-link"]}
        >
          <Image
            src={logo_linkedin}
            alt="logo-linkedin"
            width={100}
            height={100}
            className={styles["footer__social-media-logo"]}
          />
          <label
            className={styles["footer__social-media-name"]}
            htmlFor="linkedin"
          >
            Linkedin
          </label>
        </a>
        <a
          href="https://www.instagram.com/lg7.multimedia/"
          className={styles["footer__social-media-link"]}
        >
          <Image
            src={logo_instagram}
            alt="logo-instagram"
            width={100}
            height={100}
            className={styles["footer__social-media-logo"]}
          />
          <label
            className={styles["footer__social-media-name"]}
            htmlFor="linkedin"
          >
            Instagram
          </label>
        </a>
        <a
          href="https://github.com/nicolascasmuz"
          className={styles["footer__social-media-link"]}
        >
          <Image
            src={logo_github}
            alt="logo-github"
            width={100}
            height={100}
            className={styles["footer__social-media-logo"]}
          />
          <label className={styles["footer__social-media-name"]}>Github</label>
        </a>
        <a
          href="https://www.youtube.com/@LG7multimedia"
          className={styles["footer__social-media-link"]}
        >
          <Image
            src={logo_youtube}
            alt="logo-youtube"
            width={100}
            height={100}
            className={styles["footer__social-media-logo"]}
          />
          <label className={styles["footer__social-media-name"]}>YouTube</label>
        </a>
      </div>
    </footer>
  );
}
