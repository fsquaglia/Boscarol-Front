import React from "react";
import styles from "./Home.module.css";
import background from "../../assets/background01.jpg";
import Carousel from "../Carousel/Carousel";

function Home() {
  return (
    <>
      <div className={`container-fluid ${styles.container}`}>
        <div className={`${styles.imageContainer} ${styles.crece}`}>
          <img
            src={background}
            alt="Imagen de fondo taller Boscarol"
            className={`img-fluid ${styles.image}`}
          />
          <div className={styles.overlay}></div>
        </div>
      </div>
      <Carousel />
    </>
  );
}

export default Home;
/*
import React from "react";
import background from "../../assets/background01.jpg";
import styles from "./Home.module.css";
function Home() {
  return (
    <div className={`container-fluid ${styles.container}`}>
      <img
        src={background}
        alt="Imagen de fondo taller Boscarol"
        className={`img-fluid ${styles.image}`}
      />
      <div className={styles.overlay}></div>
    </div>
  );
}

export default Home;
*/
