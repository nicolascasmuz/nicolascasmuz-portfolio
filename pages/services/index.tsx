import { useState, useEffect } from "react";
import styles from "./services.module.css";
import Image from "next/image";
import type { NextPage } from "next";
import Layout from "components/layout";
import ServicesComp from "components/services";
import fondo02 from "resources/fondo02_red.png";

const Services: NextPage = () => {
  return (
    <Layout>
      <section className={styles["services-top"]}>
        <Image
          src={fondo02}
          alt="Fondo services"
          fill
          priority
          style={{ objectFit: "cover", zIndex: -1 }}
        />
        <div className={styles["header-comp"]}></div>
        <section className={styles["services-top__below"]}>
          <h1 className={styles["services-top__title"]}>Servicios</h1>
        </section>
      </section>
      <section className={styles["section-services"]}>
        <ServicesComp />
      </section>
    </Layout>
  );
};

export default Services;
