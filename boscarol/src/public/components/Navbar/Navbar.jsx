import React from "react";
import { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import LogoBoscarol from "../../assets/BoscarolHnos.png";
import styles from "./Navbar.module.css";

function Navbar() {
  useEffect(() => {
    // Inicializar tooltips
    const tooltipTriggerList = [].slice.call(
      document.querySelectorAll('[data-bs-toggle="tooltip"]')
    );
    const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new window.bootstrap.Tooltip(tooltipTriggerEl);
    });

    // Limpiar tooltips al desmontar el componente
    return () => {
      tooltipList.forEach((tooltip) => tooltip.dispose());
    };
  }, []);
  return (
    <nav
      className={`navbar navbar-expand-md navbar-dark ${styles.fixedNavbar}`}
    >
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbar-toggler"
          aria-controls="navbar-toggler"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbar-toggler">
          <NavLink to="/" className="navbar-brand">
            <img src={LogoBoscarol} alt="Logo Boscarol Hnos" />
          </NavLink>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                to="/"
                className="nav-link"
                activeClassName="active"
                aria-current="page"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Historia
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Servicios
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Tips
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contacto
              </a>
            </li>
          </ul>

          <div className="ml-auto navbar-dark">
            <NavLink to="/login" className="nav-link">
              <i
                className={`bi bi-person-fill ${styles.icon}`}
                data-bs-toggle="tooltip"
                data-bs-placement="left"
                data-bs-title="Administrador"
              ></i>
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
