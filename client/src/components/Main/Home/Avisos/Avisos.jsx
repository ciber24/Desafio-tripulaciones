import React, { useEffect, useState } from 'react';

const Avisos = () => {
  const [alumnos, setAlumnos] = useState([]);

  useEffect(() => {
    const obtenerAlumnos = async () => {
      try {
        const respuesta = await fetch('http://localhost:5000/api/info/avisos');
        if (!respuesta.ok) {
          throw new Error(`Error en la respuesta: ${respuesta.statusText}`);
        }
        const datos = await respuesta.json();
        setAlumnos(datos);
      } catch (error) {
        console.error('Error obteniendo datos:', error);
      }
    };

    obtenerAlumnos();
  }, []);

  const obtenerDiasHastaProximoCumpleaños = (fechaNacimiento) => {
    const fechaActual = new Date();
    const añoActual = fechaActual.getFullYear();
    const proximoCumpleaños = new Date(fechaNacimiento);
    proximoCumpleaños.setFullYear(añoActual);

    // Si el cumpleaños ya pasó este año, ajusta al próximo año
    if (proximoCumpleaños < fechaActual) {
      proximoCumpleaños.setFullYear(añoActual + 1);
    }

    const diferenciaTiempo = proximoCumpleaños - fechaActual;
    const diferenciaDias = Math.ceil(diferenciaTiempo / (1000 * 60 * 60 * 24));
    return diferenciaDias;
  };

  const obtenerAviso = (diasHastaCumpleaños) => {
    if (diasHastaCumpleaños === 30) {
      return "Falta 1 mes para cumplir 18, ofrecer orientación vocacional";
    } else if (diasHastaCumpleaños === 7) {
      return "Falta 1 semana para el cumpleaños, revisar documentación ofrecida";
    } else if (diasHastaCumpleaños === 1) {
      return "Falta 1 día para el cumpleaños, seguimiento y fidelización cliente";
    }
    return null;
  };

  return (
    <div>
      <h1>Lista de Alumnos</h1>
      <ul>
        {alumnos.map((alumno, index) => {
          const diasHastaCumpleaños = obtenerDiasHastaProximoCumpleaños(alumno.fecha_nacimiento);
          const aviso = obtenerAviso(diasHastaCumpleaños);

          return (
            <section>
              {aviso && <p>{aviso}</p>}
              <li key={index}>
                {alumno.nombre_alumno} - {new Date(alumno.fecha_nacimiento).toLocaleDateString()}
              </li>
            </section>
          );
        })}
      </ul>
    </div>
  );
};

export default Avisos;
