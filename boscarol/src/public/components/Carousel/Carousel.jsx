import React from "react";
import img01 from "../../assets/logo_ford.png";
import img02 from "../../assets/logo_peugeot.png";
import img03 from "../../assets/logo_renault.png";
import style from "./Carousel.module.css"

function Carousel() {
  return (
    <div
      id="carouselExampleSlidesOnly"
      className={`carousel slide ${style.bigDiv}`}
      data-bs-ride="carousel"
      data-bs-interval="4000"
      data-bs-pause="false"
    >
      <div className={`carousel-inner ${style.secondDiv}`}>
        <div className={`carousel-item carousel-fade active ${style.items}`}>
          <img src={img01} className={`d-block w-100 carousel-fade ${style.images}`} alt="..." />
        </div>
        <div className={`carousel-item carousel-fade ${style.items}`}>
          <img src={img02} className={`d-block w-100 carousel-fade ${style.images}`} alt="..." />
        </div>
        <di className={`carousel-item carousel-fade ${style.items}`}>
          <img src={img03} className={`d-block w-100 carousel-fade ${style.images}`} alt="..." />
        </di>
      </div>
    </div>
  );
}

export default Carousel;
