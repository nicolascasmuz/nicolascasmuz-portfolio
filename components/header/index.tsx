import Image from "next/image";
import styles from "./header.module.css";
import logo_lg7 from "resources/logo-lg7.png";
import menu_icon from "resources/menu-icon.png";

export default function Header(props) {
  return (
    <header
      className={styles["header"]}
      style={{ backgroundColor: props.headerTheme ? "#fafafa" : "none" }}
    >
      <a href="/main" className={styles["header__logo-a"]}>
        <Image
          src={logo_lg7}
          alt="logo-portfolio"
          width={100}
          height={100}
          className={styles["header__logo"]}
        />
      </a>
      <input
        className={styles["header__menu-input"]}
        type="checkbox"
        id="check"
      />
      <label htmlFor="check" className={styles["header__menu-label"]}>
        <Image
          className={styles["header__menu-img"]}
          src={menu_icon}
          alt="menu-icon"
          width={100}
          height={100}
        />
      </label>
      <ul className={styles["header__menu-li"]}>
        <li>
          <a href="/index" className={styles["header__option"]}>
            Inicio
          </a>
          <a href="/portfolio" className={styles["header__option"]}>
            Portfolio
          </a>
          <a href="/services" className={styles["header__option"]}>
            Servicios
          </a>
          <a href="/contact" className={styles["header__option"]}>
            Contacto
          </a>
        </li>
      </ul>
      <nav className={styles["header__menu-nav"]}>
        <a href="/portfolio" className={styles["header__option"]}>
          Portfolio
        </a>
        <a href="/services" className={styles["header__option"]}>
          Servicios
        </a>
        <a href="/contact" className={styles["header__option"]}>
          Contacto
        </a>
      </nav>
    </header>
  );
}
