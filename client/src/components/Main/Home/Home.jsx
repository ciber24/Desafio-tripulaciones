import { useState } from "react";
import Buscador from "./Buscador/Buscador";
import Windows from "./Windows"
import Servicios from "./Servicios"
import DatosPersonales from "./DatosPersonales";
import Interacciones from "./Interacciones";
import Contratos from "./Contratos";

const Home = () => {
  const [ windowsEnUso, setWindowsEnUso ] = useState(); //Estado para dibujar la info de una u otra windows
  const [ DNIbuscado, setDNIbuscado ] = useState();
  const [ clienteBuscado, setClienteBuscado ] = useState({
    datosPersonales: "",
    servicios: "",
    interacciones: "",
    contratos: ""
  });

  return <section className="home">
    <Buscador setDNIbuscado={setDNIbuscado} />
    <Windows setWindowsEnUso={setWindowsEnUso} DNIbuscado={DNIbuscado} setClienteBuscado={setClienteBuscado} />
    {windowsEnUso == "datosPersonales"? <DatosPersonales clienteBuscado={clienteBuscado.datosPersonales} /> : <></>}
    {windowsEnUso == "servicios"? <Servicios clienteBuscado={clienteBuscado.servicios} /> : <></>}
    {windowsEnUso == "interacciones"? <Interacciones clienteBuscado={clienteBuscado.interacciones} /> : <></>}
    {windowsEnUso == "contratos"? <Contratos clienteBuscado={clienteBuscado.contratos} /> : <></>}
  </section>;
};

export default Home;
