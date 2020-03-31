import React from "react";

const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <div className="contenedor">
        <div className="contenedor-footer">
          <nav id="principal" className="menu">
            <a className="enlace" href="!#">
              Para tu Negocio
            </a>
            <a className="enlace" href="!#">
              Conviertete en Instructor
            </a>
            <a className="enlace" href="!#">
              Aplicaciones Móviles
            </a>
            <a className="enlace" href="!#">
              Soporte
            </a>
            <a className="enlace" href="!#">
              Temas
            </a>
          </nav>
          <nav id="secundaria" className="menu">
            <a className="enlace" href="!#">
              ¿Quienes Somos?
            </a>
            <a className="enlace" href="!#">
              Empleo
            </a>
            <a className="enlace" href="!#">
              Blog
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
