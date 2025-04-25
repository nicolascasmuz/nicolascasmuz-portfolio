import { useState, useEffect } from "react";
import styles from "./services.module.css";

interface service {
  img: string;
  h3: string;
  p: string;
}

export default function ServicesComp() {
  const [myServices, setMyServices] = useState([]);

  console.log("myServices: ", myServices);

  function pullRequest() {
    return fetch(
      "https://preview.contentful.com/spaces/boc2rp8m0dgi/environments/master/entries?access_token=Y1_N0gShtcshwQbkaOPc2u0lA-7zD8351Q0NWQCRCsU&&content_type=servicesForPortfolio"
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const services: service[] = [];

        for (let i = 0; i < data["items"].length; i++) {
          const service = {
            img: data.items[i].fields.img,
            h3: data.items[i].fields.nombre,
            p: data.items[i].fields.descripcion,
          };

          services.push(service);
        }

        setMyServices(services);
      });
  }

  useEffect(() => {
    pullRequest();
  }, []);

  return (
    <section className={styles["section-services"]}>
      <h2 className={styles["section-services__title"]}>Servicios</h2>
      {myServices.map((s, index) => {
        return (
          <div className={styles["section-services__container"]} key={index}>
            <img
              src={s.img}
              alt="img-service"
              className={styles["section-services__img"]}
            />
            <h3 className={styles["section-services__h3"]}>{s.h3}</h3>
            <p className={styles["section-services__p"]}>{s.p}</p>
          </div>
        );
      })}
    </section>
  );
}
