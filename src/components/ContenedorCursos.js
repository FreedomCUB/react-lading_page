import React, { Fragment } from "react";

// Img
import curso1 from "../img/curso1.jpg";
import curso2 from "../img/curso2.jpg";
import curso3 from "../img/curso3.jpg";
import curso4 from "../img/curso4.jpg";
import curso5 from "../img/curso5.jpg";

import estrellas from "../img/estrellas.png";

const ContenedorCursos = () => {
  return (
    <Fragment>
      <h1 className="encabezado centrado">Cursos En Línea</h1>

      <div className="cursos contenedor">
        <div className="curso">
          <img className="imagen-curso" src={curso1}  alt="img" />
          <h4>HTML5, CSS3, JavaScript para Principiantes</h4>
          <div className="info-curso">
            <p>Juan Pedro</p>
            <img src={estrellas}  alt="img" />
            <div className="precio">
              <p className="regular">$200</p>
              <p className="oferta">$15</p>
            </div>
            <a href="!#" className="boton" data-id="1">
              Agregar Al Carrito
            </a>
          </div>
        </div>
        <div className="curso">
          <img className="imagen-curso" src={curso2}  alt="img" />
          <h4>Curso de Comida Vegetariana</h4>
          <div className="info-curso">
            <p>Juan Pedro</p>
            <img src={estrellas}  alt="img" />
            <div className="precio">
              <p className="regular">$200</p>
              <p className="oferta">$15</p>
            </div>
            <a href="!#" className="boton" data-id="2">
              Agregar Al Carrito
            </a>
          </div>
        </div>
        <div className="curso">
          <img className="imagen-curso" src={curso3}  alt="img" />
          <h4>Guitarra para Principiantes</h4>
          <div className="info-curso">
            <p>Juan Pedro</p>
            <img src={estrellas}  alt="img" />
            <div className="precio">
              <p className="regular">$200</p>
              <p className="oferta">$15</p>
            </div>
            <a href="!#" className="boton" data-id="3">
              Agregar Al Carrito
            </a>
          </div>
        </div>
        <div className="curso">
          <img className="imagen-curso" src={curso4}  alt="img" />
          <h4>Huerto en tu casa</h4>
          <div className="info-curso">
            <p>Juan Pedro</p>
            <img src={estrellas}  alt="img" />
            <div className="precio">
              <p className="regular">$200</p>
              <p className="oferta">$15</p>
            </div>
            <a href="!#" className="boton" data-id="4">
              Agregar Al Carrito
            </a>
          </div>
        </div>
        <div className="curso">
          <img className="imagen-curso" src={curso5}  alt="img" />
          <h4>Decoración con productos de tu hogar</h4>

          <div className="info-curso">
            <p>Juan Pedro</p>

            <img src={estrellas}  alt="img" />
            <div className="precio">
              <p className="regular">$200</p>
              <p className="oferta">$15</p>
            </div>
            <a href="!#" className="boton" data-id="5">
              Agregar Al Carrito
            </a>
          </div>
        </div>
        <div className="curso">
          <img className="imagen-curso" src={curso1}  alt="img" />
          <h4>Diseño Web para Principiantes</h4>
          <div className="info-curso">
            <p>Juan Pedro</p>
            <img src={estrellas}  alt="img" />
            <div className="precio">
              <p className="regular">$200</p>
              <p className="oferta">$15</p>
            </div>
            <a href="!#" className="boton" data-id="6">
              Agregar Al Carrito
            </a>
          </div>
        </div>
        <div className="curso">
          <img className="imagen-curso" src={curso2}  alt="img" />
          <h4>Comida Mexicana para principiantes</h4>
          <div className="info-curso">
            <p>Juan Pedro</p>
            <img src={estrellas}  alt="img" />
            <div className="precio">
              <p className="regular">$200</p>
              <p className="oferta">$15</p>
            </div>
            <a href="!#" className="boton" data-id="7">
              Agregar Al Carrito
            </a>
          </div>
        </div>
        <div className="curso">
          <img className="imagen-curso" src={curso3}  alt="img" />
          <h4>Estudio Musical en tu casa</h4>
          <div className="info-curso">
            <p>Juan Pedro</p>
            <img src={estrellas}  alt="img" />
            <div className="precio">
              <p className="regular">$200</p>
              <p className="oferta">$15</p>
            </div>
            <a href="!#" className="boton" data-id="8">
              Agregar Al Carrito
            </a>
          </div>
        </div>
        <div className="curso">
          <img className="imagen-curso" src={curso4}  alt="img" />
          <h4>Cosecha tus propias frutas y verduras</h4>
          <div className="info-curso">
            <p>Juan Pedro</p>
            <img src={estrellas}  alt="img" />
            <div className="precio">
              <p className="regular">$200</p>
              <p className="oferta">$15</p>
            </div>
            <a href="!#" className="boton" data-id="9">
              Agregar Al Carrito
            </a>
          </div>
        </div>
        <div className="curso">
          <img className="imagen-curso" src={curso5}  alt="img" />
          <h4>Prepara galletas caseras</h4>
          <div className="info-curso">
            <p>Juan Pedro</p>
            <img src={estrellas}  alt="img" />
            <div className="precio">
              <p className="regular">$200</p>
              <p className="oferta">$15</p>
            </div>
            <a href="!#" className="boton" data-id="10">
              Agregar Al Carrito
            </a>
          </div>
        </div>
        <div className="curso">
          <img className="imagen-curso" src={curso1}  alt="img" />
          <h4>JavaScript Moderno con ES6</h4>
          <div className="info-curso">
            <p>Juan Pedro</p>
            <img src={estrellas}  alt="img" />
            <div className="precio">
              <p className="regular">$200</p>
              <p className="oferta">$15</p>
            </div>
            <a href="!#" className="boton" data-id="11">
              Agregar Al Carrito
            </a>
          </div>
        </div>
        <div className="curso">
          <img className="imagen-curso" src={curso2}  alt="img" />
          <h4>100 Recetas de Comida Natural</h4>
          <div className="info-curso">
            <p>Juan Pedro</p>
            <img src={estrellas}  alt="img" />
            <div className="precio">
              <p className="regular">$200</p>
              <p className="oferta">$15</p>
            </div>
            <a href="!#" className="boton" data-id="12">
              Agregar Al Carrito
            </a>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ContenedorCursos;
