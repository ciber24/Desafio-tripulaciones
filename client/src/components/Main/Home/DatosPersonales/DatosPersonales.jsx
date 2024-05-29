import React from "react";
import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';
import logo from '../../../../assets/BE_logo.png';
import qr from '../../../../assets/QR_Code_Desafio.png';

const DatosPersonales = ({ clienteBuscado }) => {

  const generarPDF = () => {
    var doc = new jsPDF();

  // Agregar imagen al PDF
  doc.addImage(logo, 'PNG', 10, 10, 50, 15); // Ajustar las coordenadas y el tamaño de la imagen
  doc.addImage(qr, 'JPG', 160, 250, 30, 30); // Ajustar las coordenadas y el tamaño de la imagen

    doc.text('DATOS PERSONALES', 80, 20); // valores de ancho y largo del campo, asi funciona la libreria

    // Definir las columnas para la primera tabla
    const columns01 = ['Nombre', 'Apellidos', 'Fecha Nacimiento', 'DNI', 'Nacionalidad'];
    const data01 = [[
      clienteBuscado[0].nombre_alumno,
      clienteBuscado[0].apellido_alumno,
      clienteBuscado[0].fecha_nacimiento,
      clienteBuscado[0].dni,
      clienteBuscado[0].nacionalidad
    ]];

    // Generar la primera tabla usando autoTable
    doc.autoTable({
      startY: 30,
      head: [columns01],
      body: data01,
    });

    // Definir las columnas para la segunda tabla
    const columns02 = ['Domicilio', 'Ciudad', 'Provincia', 'País', 'C.P.'];
    const data02 = [[
      clienteBuscado[0].domicilio,
      clienteBuscado[0].ciudad,
      clienteBuscado[0].provincia,
      clienteBuscado[0].pais,
      clienteBuscado[0].codigo_postal
    ]];

    // Generar la segunda tabla usando autoTable, colocando debajo de la primera tabla
    const secondTableStartY = doc.autoTable.previous.finalY + 10; // Ajustar 10 para margen entre tablas
    doc.autoTable({
      startY: secondTableStartY,
      head: [columns02],
      body: data02,
    });

const columns03 = ['Teléfono', 'Email', 'Centro', 'Curso', 'Persona', 'Fecha'];
const data03 = [[
  clienteBuscado[0].telefono,
  clienteBuscado[0].email,
  clienteBuscado[0].colegio,
  clienteBuscado[0].curso,
  clienteBuscado[0].persona_recomendado,
  clienteBuscado[0].fecha_registro,
]];

// Generar la segunda tabla usando autoTable, colocando debajo de la primera tabla
const terceraTableStartY = doc.autoTable.previous.finalY + 10; // Ajustar 10 para margen entre tablas
doc.autoTable({
  startY: terceraTableStartY,
  head: [columns03],
  body: data03,
});

doc.text('DATOS REPRESENTANTE 1', 70, 110); // valores de ancho y largo del campo, asi funciona la libreria

const columns04 = ['Nombre', 'Apellidos', 'Relación', 'Email', 'Profesión', 'Teléfono'];
const data04 = [[
  clienteBuscado[0].nombre_representante_legal,
  clienteBuscado[0].apellidos_representante_legal,
  clienteBuscado[0].relacion_alumno_representante_legal,
  clienteBuscado[0].email_representante_legal,
  clienteBuscado[0].profesion_representante_legal,
  clienteBuscado[0].telefono_representante_legal,
]];

// Generar la segunda tabla usando autoTable, colocando debajo de la primera tabla
const cuartaTableStartY = doc.autoTable.previous.finalY + 20; // Ajustar 10 para margen entre tablas
doc.autoTable({
  startY: cuartaTableStartY,
  head: [columns04],
  body: data04,
});

doc.text('DATOS REPRESENTANTE 2', 70, 145); // valores de ancho y largo del campo, asi funciona la libreria

const columns05 = ['Nombre', 'Apellidos', 'Relación', 'Email', 'Profesión', 'Teléfono'];
const data05 = [[
  clienteBuscado[1].nombre_representante_legal,
  clienteBuscado[1].apellidos_representante_legal,
  clienteBuscado[1].relacion_alumno_representante_legal,
  clienteBuscado[1].email_representante_legal,
  clienteBuscado[1].profesion_representante_legal,
  clienteBuscado[1].telefono_representante_legal,
]];

// Generar la segunda tabla usando autoTable, colocando debajo de la primera tabla
const quintaTableStartY = doc.autoTable.previous.finalY + 20; // Ajustar 10 para margen entre tablas
doc.autoTable({
  startY: quintaTableStartY,
  head: [columns05],
  body: data05,
});

doc.text('DATOS FACTURACIÓN', 75, 180); // valores de ancho y largo del campo, asi funciona la libreria

const columns06 = ['Nombre', 'Apellidos', 'Núm. Identificación', 'Email'];
const data06 = [[
  clienteBuscado[0].nombre_datos_facturacion,
  clienteBuscado[0].apellidos_datos_facturacion,
  clienteBuscado[0].dni_datos_facturacion,
  clienteBuscado[0].email_datos_facturacion,
]];

// Generar la segunda tabla usando autoTable, colocando debajo de la primera tabla
const sextaTableStartY = doc.autoTable.previous.finalY + 20; // Ajustar 10 para margen entre tablas
doc.autoTable({
  startY: sextaTableStartY,
  head: [columns06],
  body: data06,
});

const columns07 = ['Domicilio', 'Ciudad', 'Provincia', 'País', 'C.P.'];
const data07 = [[
  clienteBuscado[0].domicilio_datos_facturacion,
  clienteBuscado[0].ciudad_datos_facturacion,
  clienteBuscado[0].provincia_datos_facturacion,
  clienteBuscado[0].pais_datos_facturacion,
  clienteBuscado[0].codigo_postal_datos_facturacion,
]];

// Generar la segunda tabla usando autoTable, colocando debajo de la primera tabla
const septimaTableStartY = doc.autoTable.previous.finalY + 10; // Ajustar 10 para margen entre tablas
doc.autoTable({
  startY: septimaTableStartY,
  head: [columns07],
  body: data07,
});


    //guardar el pdf con un nombre específico
    doc.save(`DatosPersonales_${clienteBuscado[0].dni}.pdf`);
  }

  return <>
    {clienteBuscado ? <section className="datospersonales">
      <div>
        <button>Editar</button>
        <button onClick={generarPDF}>Generar pdf</button>
      </div>

      <div className="datosCliente">
        <h3>Datos personales</h3>
        <label htmlFor="nombre">Nombre:</label>
        <input type="text" name="nombre" id="nombre" defaultValue={clienteBuscado[0].nombre_alumno} /><br></br>

        <label htmlFor="apellidos">Apellidos:</label>
        <input type="text" name="apellidos" id="apellidos" defaultValue={clienteBuscado[0].apellido_alumno} /><br></br>

        <label htmlFor="fechadenacimiento">Fecha de nacimiento:</label>
        <input type="text" name="fechadenacimiento" id="fechadenacimiento" defaultValue={new Date(clienteBuscado[0].fecha_nacimiento).toLocaleDateString()} /><br></br>

        <label htmlFor="dni">Número de Identificación:</label>
        <input type="text" name="dni" id="dni" defaultValue={clienteBuscado[0].dni} /><br></br>

        <label htmlFor="nacionalidad">Nacionalidad:</label>
        <input type="text" name="nacionalidad" id="nacionalidad" defaultValue={clienteBuscado[0].nacionalidad} /><br></br>

        <label htmlFor="domicilio">Domicilio:</label>
        <input type="text" name="domicilio" id="domicilio" defaultValue={clienteBuscado[0].domicilio} /><br></br>

        <label htmlFor="ciudad">Ciudad:</label>
        <input type="text" name="ciudad" id="ciudad" defaultValue={clienteBuscado[0].ciudad} /><br></br>

        <label htmlFor="provincia">Provincia:</label>
        <input type="text" name="provincia" id="provinicia" defaultValue={clienteBuscado[0].provincia} /><br></br>

        <label htmlFor="pais">País:</label>
        <input type="text" name="pais" id="pais" defaultValue={clienteBuscado[0].pais} /><br></br>

        <label htmlFor="cp">C.P.:</label>
        <input type="text" name="cp" id="cp" defaultValue={clienteBuscado[0].codigo_postal} /><br></br>

        <label htmlFor="telefono">Teléfono:</label>
        <input type="text" name="telefono" id="telefono" defaultValue={clienteBuscado[0].telefono} /><br></br>

        <label htmlFor="email">email:</label>
        <input type="text" name="email" id="email" defaultValue={clienteBuscado[0].email} /><br></br>

        <label htmlFor="centroeducativo">Centro educativo:</label>
        <input type="text" name="centroeducativo" id="centroeducativo" defaultValue={clienteBuscado[0].colegio} /><br></br>

        <label htmlFor="curso">Curso:</label>
        <input type="text" name="curso" id="curso" defaultValue={clienteBuscado[0].curso} /><br></br>

        <label htmlFor="persona_recomendado">Persona que ha recomendado:</label>
        <input type="text" name="persona_recomendado" id="persona_recomendado" defaultValue={clienteBuscado[0].persona_recomendado} /><br></br>

        <label htmlFor="fecha_registro">Fecha de registro:</label>
        <input type="text" name="fecha_registro" id="fecha_registro" defaultValue={new Date(clienteBuscado[0].fecha_registro).toLocaleDateString()} /><br></br>
      </div>


      <div className="datosRepresentante">
        <h3>Datos del representante 1</h3>

        <label htmlFor="nombre_representante_legal">Nombre:</label>
        <input type="text" name="nombre_representante_legal" id="nombre_representante_legal" defaultValue={clienteBuscado[0].nombre_representante_legal} /><br></br>

        <label htmlFor="apellidos_representante_legal">Apellidos:</label>
        <input type="text" name="apellidos_representante_legal" id="apellidos_representante_legal" defaultValue={clienteBuscado[0].apellidos_representante_legal} /><br></br>

        <label htmlFor="relacion_alumno_representante_legal">Relación:</label>
        <input type="text" name="relacion_alumno_representante_legall" id="relacion_alumno_representante_legal" defaultValue={clienteBuscado[0].relacion_alumno_representante_legal} /><br></br>

        <label htmlFor="email_representante_legal">Email:</label>
        <input type="text" name="email_representante_legal" id="email_representante_legal" defaultValue={clienteBuscado[0].email_representante_legal} /><br></br>

        <label htmlFor="profesion_representante_legal">Profesión:</label>
        <input type="text" name="profesion_representante_legal" id="profesion_representante_legal" defaultValue={clienteBuscado[0].profesion_representante_legal} /><br></br>

        <label htmlFor="telefono_representante_legal">Teléfono:</label>
        <input type="text" name="telefono_representante_legal" id="telefono_representante_legal" defaultValue={clienteBuscado[0].telefono_representante_legal} /><br></br>
      </div>

      {clienteBuscado[1] ?
        <div className="datosRepresentante">
          <h3>Datos del representante 2</h3>

          <label htmlFor="nombre_representante_legal">Nombre:</label>
          <input type="text" name="nombre_representante_legal" id="nombre_representante_legal" defaultValue={clienteBuscado[1].nombre_representante_legal} /><br></br>

          <label htmlFor="apellidos_representante_legal">Apellidos:</label>
          <input type="text" name="apellidos_representante_legal" id="apellidos_representante_legal" defaultValue={clienteBuscado[1].apellidos_representante_legal} /><br></br>

          <label htmlFor="relacion_alumno_representante_legal">Relación:</label>
          <input type="text" name="relacion_alumno_representante_legall" id="relacion_alumno_representante_legal" defaultValue={clienteBuscado[1].relacion_alumno_representante_legal} /><br></br>

          <label htmlFor="email_representante_legal">Email:</label>
          <input type="text" name="email_representante_legal" id="email_representante_legal" defaultValue={clienteBuscado[1].email_representante_legal} /><br></br>

          <label htmlFor="profesion_representante_legal">Profesión:</label>
          <input type="text" name="profesion_representante_legal" id="profesion_representante_legal" defaultValue={clienteBuscado[1].profesion_representante_legal} /><br></br>

          <label htmlFor="telefono_representante_legal">Teléfono:</label>
          <input type="text" name="telefono_representante_legal" id="telefono_representante_legal" defaultValue={clienteBuscado[1].telefono_representante_legal} /><br></br>
        </div> : <></>}

      <h3>Datos de facturación</h3>
      <div className="datosFacturacion">
        <label htmlFor="nombre_datos_facturacion">Nombre:</label>
        <input type="text" name="nombre_datos_facturacion" id="nombre_datos_facturacion" defaultValue={clienteBuscado[0].nombre_datos_facturacion} /><br></br>

        <label htmlFor="apellidos_datos_facturacion">Apellidos:</label>
        <input type="text" name="apellidos_datos_facturacion" id="apellidos_datos_facturacion" defaultValue={clienteBuscado[0].apellidos_datos_facturacion} /><br></br>

        <label htmlFor="dni_datos_facturacion">Número de Identificación:</label>
        <input type="text" name="dni_datos_facturacion" id="dni_datos_facturacion" defaultValue={clienteBuscado[0].dni_datos_facturacion} /><br></br>

        <label htmlFor="email_datos_facturacion">Email:</label>
        <input type="text" name="email_datos_facturacion" id="email_datos_facturacion" defaultValue={clienteBuscado[0].email_datos_facturacion} /><br></br>

        <label htmlFor="domicilio_datos_facturacion">Domicilio:</label>
        <input type="text" name="domicilio_datos_facturacion" id="domicilio_datos_facturacion" defaultValue={clienteBuscado[0].domicilio_datos_facturacion} /><br></br>

        <label htmlFor="ciudad_datos_facturacion">Ciudad:</label>
        <input type="text" name="ciudad_datos_facturacion" id="ciudad_datos_facturacion" defaultValue={clienteBuscado[0].ciudad_datos_facturacion} /><br></br>

        <label htmlFor="provincia_datos_facturacion">Provincia:</label>
        <input type="text" name="provincia_datos_facturacion" id="provincia_datos_facturacion" defaultValue={clienteBuscado[0].provincia_datos_facturacion} /><br></br>

        <label htmlFor="pais_datos_facturacion">País:</label>
        <input type="text" name="pais_datos_facturacion" id="pais_datos_facturacion" defaultValue={clienteBuscado[0].pais_datos_facturacion} /><br></br>

        <label htmlFor="codigo_postal_datos_facturacion">Código Postal:</label>
        <input type="text" name="codigo_postal_datos_facturacion" id="codigo_postal_datos_facturacion" defaultValue={clienteBuscado[0].codigo_postal_datos_facturacion} /><br></br>
      </div>
    </section > : <></>}
  </>
};

export default DatosPersonales;
