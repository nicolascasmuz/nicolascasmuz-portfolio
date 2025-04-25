import Footer from "components/footer";
import Header from "components/header";
import styles from "./layout.module.css";

export default function Layout(props) {
  return (
    <div className={styles.div}>
      <Header headerTheme={props.headerTheme} />
      <div>{props.children}</div>
      <Footer footerTheme={props.footerTheme} />
    </div>
  );
}
