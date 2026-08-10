import styles from "./footer.module.css";
import Image from "next/image";
import logo_lg7 from "resources/logo-cedar.png";
import logo_linkedin from "resources/linkedin-icon.png";
import logo_instagram from "resources/instagram-icon.png";
import logo_github from "resources/github-icon.png";

export default function Footer(props) {
  return (
    <footer
      className={styles["footer"]}
      style={{ backgroundColor: props.footerTheme ? "#fafafa" : "#021f27" }}
    >
      <Image
        src={logo_lg7}
        alt="logo-lg7"
        width={100}
        height={100}
        className={styles["footer__logo"]}
        style={{ filter: props.footerTheme ? "none" : "invert()" }}
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
            style={{ filter: props.footerTheme ? "none" : "invert()" }}
          >
            Linkedin
          </label>
        </a>
        <a
          href="https://www.instagram.com/nicolasfcasmuz/"
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
            style={{ filter: props.footerTheme ? "none" : "invert()" }}
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
          <label
            className={styles["footer__social-media-name"]}
            style={{ filter: props.footerTheme ? "none" : "invert()" }}
          >
            Github
          </label>
        </a>
      </div>
    </footer>
  );
}
