import React from "react";

const Interacciones = ({ clienteBuscado }) => {
  return <section className="interacciones">
    <article>
      <h1>Historial de Interacciones</h1>
      <div>
        <button>Editar</button>
        <button>Generar PDF</button>
      </div>
    </article>

    {clienteBuscado? clienteBuscado.map((elem, i) => <article key={i} className="interaccionesCard">
      <div>
        <div>
          <label>Motivo: </label>
          <select name="" defaultValue={elem.motivo}>
            <option value="Seguimiento">Seguimiento</option>
            <option value="Ofertas">Ofertas</option>
            <option value="Incidencias">Incidencias</option>
          </select>
        </div>
        <div>
          <label>Fecha: </label>
          <input type="text" defaultValue={new Date(elem.fecha).toLocaleDateString()}/>
        </div>
      </div>
      <label>Observaciones: </label>
      <textarea name="Observaciones" >{elem.observaciones}</textarea>
    </article>) : <></>}
  </section>;
};

export default Interacciones;
