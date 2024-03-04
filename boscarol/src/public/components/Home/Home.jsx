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
      <div className=" container-fluid justify-content-center align-items-center">
        <div
          className="row"
          style={{
            maxHeight: "300px",
            maxWidth: "auto",
            background: "#e1dede",
          }}
        >
          <Carousel />
        </div>
      </div>
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
