import React from "react";
import axios from "axios";

const Windows = ({ setWindowsEnUso, DNIbuscado, setClienteBuscado }) => {

  function clickWindows(windows) {
    setWindowsEnUso(windows);
    setClienteBuscado({
      datosPersonales: "",
      servicios: "",
      interacciones: "",
      contratos: ""
    })
    const url = `http://localhost:5000/api/info/${windows}?dni=${DNIbuscado}`
    console.log(windows)
    try {
      console.log(windows)
      const res = axios.get(url);
      console.log(res)
      if(windows == "datosPersonales") {
        res.then(response => setClienteBuscado(prev => {
          return {...prev, datosPersonales: response.data}
        }));
      } else if (windows == "servicios") {
        res.then(response => setClienteBuscado(prev => {
          return {...prev, servicios: response.data}
        }));
      } else if (windows == "interacciones") {
        res.then(response => setClienteBuscado(prev => {
          return {...prev, interacciones: response.data}
        }));
      } else {
        res.then(response => setClienteBuscado(prev => {
          return {...prev, contratos: response.data}
        }));
      }
    } catch {
      console.log("ERROR: NOT FOUND");
    }
  };

  return <>
    <section className="cabecera_estudiante">
      <div className="nombre_estudiante">
        <h3>Nombre del alumno</h3>
      </div>
      <nav className="windows">
        <button onClick={() => clickWindows("datosPersonales")} className="boton-datos-personales">DATOS PERSONALES</button>
        <button onClick={() => clickWindows("servicios")} className="boton-servicios">SERVICIOS</button>
        <button onClick={() => clickWindows("interacciones")} className="boton-interacciones">INTERACCIONES</button>
        <button onClick={() => clickWindows("contratos")} className="boton-campañas-contratadas">CONTRATOS</button>
      </nav>
    </section>
  </>
};

export default Windows;