import React from "react";
import img01 from "../../assets/logo_ford.png";
import img02 from "../../assets/logo_peugeot.png";
import img03 from "../../assets/logo_renault.png";

function Carousel() {
  return (
    <div
      id="carouselExampleSlidesOnly"
      className="carousel slide carousel-fade"
      data-bs-ride="carousel"
      data-bs-interval="1500"
      data-bs-pause="false"
    >
      <div className="carousel-inner carousel-fade">
        <div className="carousel-item active">
          <img src={img01} className="d-block w-100 carousel-fade" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={img02} className="d-block w-100 carousel-fade" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={img03} className="d-block w-100 carousel-fade" alt="..." />
        </div>
      </div>
    </div>
  );
}

export default Carousel;
