import React from "react";

const Hero = () => {
  return (
    <div className="hero">
      <div className="contenido-hero contenedor">
        <h1>Aprende algo nuevo</h1>
        <p>Todos los cursos a $15</p>
        <form  id="busqueda"  className="formulario">
          <input
            className=""
            type="text"
            placeholder="¿Que te gustaría Aprender?"
            id="buscador"
          />
          <input
            type="submit"
            id="submit-buscador"
            className="submit-buscador"
          />
        </form>
      </div>
    </div>
  );
};

export default Hero;
