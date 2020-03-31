import React from "react";

// img
import logo from "../img/logo.jpg";
import cart from "../img/cart.png";
import curso1 from "../img/curso1.jpg";

const Header = () => {
  return (
    <header id="header" className="header contenedor">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="carrito-compras">
        <img src={cart} alt="carrito" className="img-carrito" />
        <div className="contenido oculto">
          <img src={curso1} alt="curso" />
          <div className="detalles">
            <p>CSS Grid y Flexbox Construye + 10 Proyectos</p>
            <p>$15</p>
            <a href="!#" className="boton">
              Vaciar Carrito
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
