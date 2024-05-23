import React from "react";
import Buscador from "./Buscador/Buscador";
import Pestañas from "./Pestañas"
import Servicios from "./Servicios"
import DatosPersonales from "./DatosPersonales";

const Home = () => {
  return <section className="home">
    <Buscador />
    <Pestañas />
    <DatosPersonales />
    <Servicios />
  </section>;
};

export default Home;
