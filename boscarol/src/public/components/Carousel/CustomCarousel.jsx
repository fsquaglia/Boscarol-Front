import React from "react";

function CustomCarousel() {
  return (
    <div
      id="carouselExample"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="https://ruta-de-tu-imagen.com/imagen1.jpg"
            className="d-block w-100"
            alt="Primera imagen"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://img.freepik.com/foto-gratis/mecanico-cambiar-aceite-motor-vehiculo-automovil_342744-260.jpg?t=st=1709507712~exp=1709511312~hmac=d220618d12c5722d21b3e4d7ce0cf833b1a1918ceb20d1433c9da7533791dcfe&w=1380"
            className="d-block w-100"
            alt="Segunda imagen"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://img.freepik.com/foto-gratis/trafico-vehiculos-reflexiones-urbano-ciudad_1112-973.jpg?t=st=1709507570~exp=1709511170~hmac=13530adfa0d0911e5df6e32cb7f124647dfde9bb4fe85f9e03e44f8a4a324f29&w=1380"
            className="d-block w-100"
            alt="Tercera imagen"
          />
        </div>
      </div>
    </div>
  );
}

export default CustomCarousel;
