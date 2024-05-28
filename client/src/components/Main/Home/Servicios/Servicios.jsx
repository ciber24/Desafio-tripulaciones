import React from "react";

const Servicios = ({ clienteBuscado }) => {
  return <section className="servicios">
    <h1>Servicios</h1>
    <article>
    {clienteBuscado? clienteBuscado.map(elem => <div>
      {elem.interes_alumno_bool == true? <input type="checkbox" name={elem.interes_alumno} checked/> : <input type="checkbox" name={elem.interes_alumno} />}
      <label htmlFor={elem.interes_alumno}>{elem.interes_alumno}</label>
    </div>) : <></>}
    </article>
  </section>;
};

export default Servicios;
