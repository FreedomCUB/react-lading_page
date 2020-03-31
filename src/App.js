import React, { Fragment } from 'react';
import './Styles/main.scss';
// componentes
import Header from "./components/Header";
import Hero from "./components/Hero";
import Barra from "./components/Barra";
import ContenedorCursos from "./components/ContenedorCursos";
import Footer from "./components/Footer";

function App() {
  return (    
      <Fragment>
        <Header/>
        <Hero/>
        <Barra/>
        <ContenedorCursos/>
        <Footer/>
      </Fragment>
  );
}

export default App;
