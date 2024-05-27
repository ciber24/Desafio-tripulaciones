import React from "react";


const DatosPersonales = () => {
  return <>
    <section className="datospersonales">
      <h3>Datos personales</h3>

      <form id="datospersonales">
        <div>
          <button>Editar</button>
          <button>Generar pdf</button>
        </div>
        <div>
          <label htmlFor="nombre">Nombre:</label>
          <input type="text" name="nombre" id="nombre"/><br></br>
          <label htmlFor="Apellidos">Apellidos:</label>
          <input type="text" name="apellidos" id="apellidos"/><br></br>
          <label htmlFor="fechadenacimiento">Fecha de nacimiento:</label>
          <input type="text" name="fechadenacimiento" id="fechadenacimiento" /><br></br>
          <label htmlFor="nacionalidad">Nacionalidad:</label>
          <input type="text" name="nacionalidad" id="nacionalidad" /><br></br>
          <label htmlFor="domicilio">Domicilio:</label>
          <input type="text" name="domicilio" id="domicilio"/><br></br>
          <label htmlFor="ciudad">Ciudad:</label>
          <input type="text" name="ciudad" id="ciudad"/><br></br>
          <label htmlFor="provincia">Provincia:</label>
          <input type="text" name="provincia" id="provinicia"/><br></br>
          <label htmlFor="pais">País:</label>
          <input type="text" name="pais" id="pais" /><br></br>
          <label htmlFor="cp">C.P.:</label>
          <input type="text" name="cp" id="text"/><br></br>
          <label htmlFor="telefono">Teléfono:</label>
          <input type="text" name="telefono" id="telefono" /><br></br>
          <label htmlFor="telefono">email:</label>
          <input type="text" name="email" id="email" /><br></br>
          <label htmlFor="telefono">Centro educativo:</label>
          <input type="text" name="centroeducativo" id="telefono" /><br></br>
        </div>
      </form>
    </section >
  </>
};

export default DatosPersonales;
