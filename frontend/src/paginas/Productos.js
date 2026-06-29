import { useEffect, useState } from "react";
import API from "../api/api";

function Productos() {

    const [productos, setProductos] = useState([]);

    useEffect(() => {
        cargarProductos();
    }, []);

    const cargarProductos = async () => {
        try {

            const res = await API.get("productos/");

            setProductos(res.data);

        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="container mt-4">

            <h2>Productos Disponibles</h2>

            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Producto</th>
                        <th>Descripción</th>
                        <th>Precio</th>
                        <th>Stock</th>
                    </tr>
                </thead>

                <tbody>
                    {productos.map((producto) => (
                        <tr key={producto.id_producto}>
                            <td>{producto.id_producto}</td>
                            <td>{producto.nombre}</td>
                            <td>{producto.descripcion}</td>
                            <td>${producto.precio}</td>
                            <td>{producto.stock}</td>
                        </tr>
                    ))}
                </tbody>

            </table>

        </div>
    );
}

export default Productos;