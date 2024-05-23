import React from "react";

const Servicios = () => {
  return <section className="servicios">
    <h1>Servicios</h1>
    <article>
      <div>
        <div>
          <input type="checkbox" name="Orientación vocacional" />
          <label htmlFor="">Orientación vocacional</label>
        </div>
        <div>
          <input type="checkbox" />
          <label htmlFor="">Año y trimestre escolar en el extranjero</label>
        </div>
        <div>
          <input type="checkbox" />
          <label htmlFor="">Selección de colegios en España</label>
        </div>
        <div>
          <input type="checkbox" />
          <label htmlFor="">Selección de colegios en España</label>
        </div>
        <div>
          <input type="checkbox" />
          <label htmlFor="">Estudiar en España: Grados y Postgrados</label>
        </div>
      </div>

      <div>
        <div>
          <input type="checkbox" />
          <label htmlFor="">Estudiar en el extranjero: Grados y Postgrados</label>
        </div>
        <div>
          <input type="checkbox" />
          <label htmlFor="">Preparación de exámenes</label>
        </div>
        <div>
          <input type="checkbox" />
          <label htmlFor="">Campamentos</label>
        </div>
        <div>
          <input type="checkbox" />
          <label htmlFor="">Cursos preuniversitarios</label>
        </div>
        <div>
          <input type="checkbox" />
          <label htmlFor="">Voluntariados</label>
        </div>
        <div>
          <input type="checkbox" />
          <label htmlFor="">Desarrollo personal</label>
        </div>
      </div>
    </article>
  </section>;
};

export default Servicios;
