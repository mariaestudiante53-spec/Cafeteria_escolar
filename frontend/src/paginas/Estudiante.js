import { useEffect, useState } from "react";
import NavbarCliente from "../componentes/NavbarCliente";
import API from "../api/api";

function Estudiante() {

    const usuario = JSON.parse(localStorage.getItem("usuario"));

    const [productos, setProductos] = useState([]);
    const [carrito, setCarrito] = useState([]);

    useEffect(() => {
        obtenerProductos();
    }, []);

    const obtenerProductos = async () => {
        try {
            const res = await API.get("productos/");
            setProductos(res.data);
        } catch (error) {
            console.error("Error al cargar productos:", error);
        }
    };

    const agregarCarrito = (producto) => {
        setCarrito([...carrito, producto]);
    };

    const total = carrito.reduce(
        (suma, producto) => suma + Number(producto.precio),
        0
    );

    return (
        <div>
            <NavbarCliente />

            <div className="container mt-4">

                <h1>Bienvenido {usuario.nombre}</h1>
                <p>Explora el menú de la cafetería escolar</p>

                <hr />

                <h2>Productos Disponibles</h2>

                <div className="row">

                    {productos.map((producto) => (

                        <div
                            className="col-md-4 mb-4"
                            key={producto.id_producto}
                        >
                            <div className="card shadow h-100">

                                <img
                                    src={producto.imagen}
                                    alt={producto.nombre}
                                    className="card-img-top"
                                    style={{
                                        height: "200px",
                                        objectFit: "cover"
                                    }}
                                />

                                <div className="card-body">

                                    <h5>{producto.nombre}</h5>

                                    <p>
                                        <strong>Descripción:</strong>
                                        <br />
                                        {producto.descripcion}
                                    </p>

                                    <p>
                                        <strong>Precio:</strong>
                                        {" $"}
                                        {producto.precio}
                                    </p>

                                    <p>
                                        <strong>Stock:</strong>
                                        {" "}
                                        {producto.stock}
                                    </p>

                                    <button
                                        className="btn btn-success"
                                        onClick={() =>
                                            agregarCarrito(producto)
                                        }
                                    >
                                        Agregar al carrito
                                    </button>

                                </div>

                            </div>
                        </div>

                    ))}

                </div>

                <hr />

                <h2>Carrito de Compras</h2>

                {carrito.length === 0 ? (
                    <p>No hay productos en el carrito.</p>
                ) : (
                    <>
                        <table className="table table-bordered">

                            <thead>
                                <tr>
                                    <th>Producto</th>
                                    <th>Precio</th>
                                </tr>
                            </thead>

                            <tbody>

                                {carrito.map((producto, index) => (
                                    <tr key={index}>
                                        <td>{producto.nombre}</td>
                                        <td>${producto.precio}</td>
                                    </tr>
                                ))}

                            </tbody>

                        </table>

                        <h4>
                            Total a pagar: $
                            {total.toFixed(2)}
                        </h4>
                    </>
                )}

            </div>
        </div>
    );
}

export default Estudiante;