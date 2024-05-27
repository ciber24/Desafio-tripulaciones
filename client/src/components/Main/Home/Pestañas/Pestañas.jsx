import React from "react";

const Pestañas = ({ setPestañaEnUso }) => {
  function clickPestaña(pestaña) {
    setPestañaEnUso(pestaña);
  };

  return <>
  <section className="cabecera_estudiante">
    <div className="nombre_estudiante">
      <h3>Nombre del alumno</h3>
    </div>
    <nav className="pestañas">
      <button onClick={() => clickPestaña("datosPersonales")} className="boton-datos-personales">DATOS PERSONALES</button>
      <button onClick={() => clickPestaña("servicios")} className="boton-servicios">SERVICIOS</button>
      <button onClick={() => clickPestaña("interacciones")} className="boton-interacciones">INTERACCIONES</button>
      <button onClick={() => clickPestaña("campañasContratadas")} className="boton-campañas-contratadas">CAMPAÑAS CONTRATADAS</button>
    </nav>
    </section>
  </> 
};

export default Pestañas;
