import { useRef } from "react";

const Buscador = ({ setDNIbuscado }) => {
  const inputRef = useRef();

  function buscarDNI () {
    console.log(inputRef.current.value)
    setDNIbuscado(inputRef.current.value);
  };

  return <section className="buscador" id="buscador">
      <label>Buscar alumno:  </label>
      <input type="search" id="buscadoralumno" name="buscadoralumno" placeholder="DNI" ref={inputRef}/>
      <button onClick={() => buscarDNI()}>Buscar</button>
  </section>
};

export default Buscador;