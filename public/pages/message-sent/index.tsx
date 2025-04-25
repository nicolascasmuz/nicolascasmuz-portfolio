import styles from "./message-sent.module.css";
import type { NextPage } from "next";
import Layout from "components/layout";
import { useRouter } from "next/router";

const MessageSent: NextPage = () => {
  const router = useRouter();

  function HandleClick(e) {
    e.preventDefault();
    router.push("/");
  }

  return (
    <Layout headerTheme={true}>
      <div className={styles["general-comp"]}>
        <div className={styles["general-section__wrapper"]}>
          <h2>Muchas gracias</h2>
          <p>En breve me estaré contactando contigo.</p>
          <button onClick={HandleClick}>Volver</button>
        </div>
      </div>
    </Layout>
  );
};

export default MessageSent;
