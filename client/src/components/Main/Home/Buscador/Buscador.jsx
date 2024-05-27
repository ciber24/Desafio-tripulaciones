import React from "react";


const Buscador = () => {
  return <section className="buscador" id="buscador">
    
  <form action="#">
    <label>Buscar alumno:  </label>
    <input type="search" id="buscadoralumno" name="buscadoralumno" placeholder="email"/>
    <button>Buscar</button>
  </form>
  </section>
};

export default Buscador;
