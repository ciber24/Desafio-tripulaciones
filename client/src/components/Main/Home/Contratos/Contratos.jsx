import React from "react";

const Contratos = ({ clienteBuscado }) => {
  return <section className="contratos">
    {clienteBuscado ? clienteBuscado.map((elem, i) => <article key={i}>
      <label htmlFor="nombre_servicio">Nombre del servicio:</label>
      <input type="text" name="nombre_servicio" defaultValue={elem.nombre_servicio} /><br></br>

      <label htmlFor="fecha_factura">Fecha de emisión:</label>
      <input type="text" name="fecha_factura" defaultValue={new Date(elem.fecha_factura).toLocaleDateString()} /><br></br>

      <label htmlFor="precio_por_servicio">Precio de la factura:</label>
      <input type="text" name="precio_por_servicio" defaultValue={elem.precio_por_servicio} /><br></br>
    </article>) : <></>}

    {clienteBuscado? <p>Precio total: {clienteBuscado[0].precio_factura}</p> : <></>}
  </section>;
};

export default Contratos;
