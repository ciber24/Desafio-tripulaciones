import React from "react";

const Interacciones = () => {
  return <section className="interacciones">
    <article>
      <h1>Historial de Interacciones</h1>
      <div>
        <button>Editar</button>
        <button>Generar PDF</button>
      </div>
    </article>

    <form action="">
      <div>
        <div>
          <label htmlFor="">Motivo: </label>
          <select name="" id="">
            <option value="Seguimiento">Seguimiento</option>
            <option value="Ofertas">Ofertas</option>
            <option value="Incidencias">Incidencias</option>
          </select>
        </div>
        <div>
          <label htmlFor="">Fecha: </label>
          <input type="date" />
        </div>
      </div>
      <label htmlFor="">Observaciones: </label>
      <textarea name="Observaciones" id=""></textarea>
    </form>
  </section>;
};

export default Interacciones;
