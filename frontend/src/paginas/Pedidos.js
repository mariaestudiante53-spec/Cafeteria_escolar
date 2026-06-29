import React, { useEffect, useState } from "react";

function Pedidos() {
  const [pedidos, setPedidos] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/pedidos/")
      .then(res => res.json())
      .then(data => setPedidos(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="container mt-4">
      <h2>Pedidos</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Usuario</th>
            <th>Fecha</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          {pedidos.map(p => (
            <tr key={p.id_pedido}>
              <td>{p.id_pedido}</td>
              <td>{p.id_usuario}</td>
              <td>{p.fecha}</td>
              <td>{p.estado}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Pedidos;