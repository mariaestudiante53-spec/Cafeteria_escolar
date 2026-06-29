import React, { useEffect, useState } from "react";

function Categorias() {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/categorias/")
      .then(res => res.json())
      .then(data => setCategorias(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="container mt-4">
      <h2>Categorías</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
          </tr>
        </thead>
        <tbody>
          {categorias.map(c => (
            <tr key={c.id_categoria}>
              <td>{c.id_categoria}</td>
              <td>{c.nombre}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Categorias;