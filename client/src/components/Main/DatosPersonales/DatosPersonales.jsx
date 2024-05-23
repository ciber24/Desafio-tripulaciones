import React from "react";

const DatosPersonales = () => {
  return <>
    <section>
      <h3>Datos personales</h3>

      <form id="datospersonales">
        <div>
          <button>Editar</button>
          <button>Generar pdf</button>
        </div>
        <div>
          <label for="nombre">Nombre:</label>
          <input type="text" name="nombre" id="nombre"/><br></br>
          <label for="Apellidos">Apellidos:</label>
          <input type="text" name="apellidos" id="apellidos"/><br></br>
          <label for="fechadenacimiento">Fecha de nacimiento:</label>
          <input type="text" name="fechadenacimiento" id="fechadenacimiento" /><br></br>
          <label for="nacionalidad">Nacionalidad:</label>
          <input type="text" name="nacionalidad" id="nacionalidad" /><br></br>
          <label for="domicilio">Domicilio:</label>
          <input type="text" name="domicilio" id="domicilio"/><br></br>
          <label for="ciudad">Ciudad:</label>
          <input type="text" name="ciudad" id="ciudad"/><br></br>
          <label for="provincia">Provincia:</label>
          <input type="text" name="provincia" id="provinicia"/><br></br>
          <label for="pais">País:</label>
          <input type="text" name="pais" id="pais" /><br></br>
          <label for="cp">C.P.:</label>
          <input type="text" name="cp" id="text"/><br></br>
          <label for="telefono">Teléfono:</label>
          <input type="text" name="telefono" id="telefono" /><br></br>
          <label for="telefono">email:</label>
          <input type="text" name="email" id="email" /><br></br>
          <label for="telefono">Centro educativo:</label>
          <input type="text" name="centroeducativo" id="telefono" /><br></br>
        </div>
      </form>
    </section >
  </>
};

export default DatosPersonales;
