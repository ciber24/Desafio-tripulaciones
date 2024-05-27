import { useState } from "react";
import Buscador from "./Buscador/Buscador";
import Pestañas from "./Pestañas"
import Servicios from "./Servicios"
import DatosPersonales from "./DatosPersonales";
import Interacciones from "./Interacciones";

const Home = () => {
  const [ pestañaEnUso, setPestañaEnUso ] = useState() //Estado para dibujar la info de una u otra pestaña

  return <section className="home">
    <Buscador />
    <Pestañas setPestañaEnUso={setPestañaEnUso}/>
    {pestañaEnUso == "datosPersonales"? <DatosPersonales /> : <></>}
    {pestañaEnUso == "servicios"? <Servicios /> : <></>}
    {pestañaEnUso == "interacciones"? <Interacciones /> : <></>}
  </section>;
};

export default Home;
