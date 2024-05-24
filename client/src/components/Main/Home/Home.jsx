import React from "react";
import Buscador from "./Buscador/Buscador";
import Pestañas from "./Pestañas"
import Servicios from "./Servicios"
import DatosPersonales from "./DatosPersonales";
import Interacciones from "./Interacciones";

const Home = () => {
  return <section className="home">
    <Buscador />
    <Pestañas />
    <DatosPersonales />
    <Servicios />
    <Interacciones />
  </section>;
};

export default Home;
