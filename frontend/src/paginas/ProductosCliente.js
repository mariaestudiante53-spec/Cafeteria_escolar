import { useEffect, useState } from "react";
import API from "../api/api";
import NavbarCliente from "../componentes/NavbarCliente";

function ProductosCliente() {

    const [productos, setProductos] = useState([]);
const [carrito, setCarrito] = useState(() => {

    const usuario = JSON.parse(
        localStorage.getItem("usuario")
    );

    const carritoGuardado = localStorage.getItem(
        `carrito_${usuario?.id_usuario}`
    );

    return carritoGuardado
        ? JSON.parse(carritoGuardado)
        : [];
});

useEffect(() => {
    cargarProductos();
}, []);

useEffect(() => {

    const usuario = JSON.parse(
        localStorage.getItem("usuario")
    );

    if (usuario) {

        localStorage.setItem(
            `carrito_${usuario.id_usuario}`,
            JSON.stringify(carrito)
        );
    }

}, [carrito]);

const cargarProductos = async () => {

    console.log("ENTRO A CARGAR PRODUCTOS");

    try {

        const respuesta = await API.get("productos/");

        console.log("DATOS:", respuesta.data);

        setProductos(respuesta.data);

    } catch (error) {

        console.error("ERROR:", error);

    }
};
const agregarCarrito = (producto) => {

    if (producto.stock <= 0) {
        alert("Producto sin existencias");
        return;
    }

    setCarrito((prev) => {

        const existe = prev.find(
            item => item.id_producto === producto.id_producto
        );

if (existe) {

    if (existe.cantidad >= producto.stock) {
        alert("No hay suficiente stock disponible");
        return prev;
    }

    return prev.map(item =>
        item.id_producto === producto.id_producto
            ? {
                ...item,
                cantidad: item.cantidad + 1
            }
            : item
    );
}
        return [
            ...prev,
            {
                ...producto,
                cantidad: 1
            }
            
        ];

    });
            alert("Producto agregado al carrito");
};

const comprarProductos = async () => {

    if (carrito.length === 0) {
        alert("El carrito está vacío");
        return;
    }

    try {

        const usuario = JSON.parse(
            localStorage.getItem("usuario")
        );


// Fecha y hora local de México
const ahora = new Date();

const fechaMexico =
`${ahora.getFullYear()}-${
String(ahora.getMonth() + 1).padStart(2, '0')}-${
String(ahora.getDate()).padStart(2, '0')} ${
String(ahora.getHours()).padStart(2, '0')}:${
String(ahora.getMinutes()).padStart(2, '0')}:${
String(ahora.getSeconds()).padStart(2, '0')}`;

// Crear pedido
const pedido = await API.post(
    "pedidos/",
    {
        id_usuario: usuario.id_usuario,
        fecha: fechaMexico,
        total: totalPagar,
        estado: "Pendiente",
        observaciones: "Pedido realizado desde cliente"
    }
);

const idPedido = pedido.data.id_pedido;

// Guardar detalles y actualizar stock


        // Guardar detalles y actualizar stock
        for (const producto of carrito) {

await API.post(
    "detalles/",
    {
        id_pedido: idPedido,
        id_producto: producto.id_producto,
        cantidad: producto.cantidad,
        precio_unitario: producto.precio,
        subtotal: producto.precio * producto.cantidad
    }
);

const nuevoStock =
    parseInt(producto.stock) - (producto.cantidad || 1);
await API.patch(
    `productos/${producto.id_producto}/`,
    {
        stock: nuevoStock
    }
);
        }

        alert("Compra realizada correctamente");

        setCarrito([]);

        localStorage.removeItem(
            `carrito_${usuario.id_usuario}`
        );

        cargarProductos();

    } catch (error) {

        console.error("ERROR COMPLETO:", error);

        if (error.response) {
            console.error("DATA:", error.response.data);
            console.error("STATUS:", error.response.status);
        }

        alert("Error al registrar la compra");
    }
};

const totalPagar = carrito.reduce(
    (total, item) =>
        total +
        (parseFloat(item.precio || 0) * (item.cantidad || 1)),
    0
);
    return (
        <>
            <NavbarCliente />

            <div className="container mt-4">

                <h2 className="text-center mb-4">
                    Productos Disponibles
                </h2>

                <div className="alert alert-info">
                    Total productos encontrados: {productos.length}
                </div>

                <div className="row">

                    {productos.length > 0 ? (
                        productos.map((producto) => (
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
                                            height: "250px",
                                            objectFit: "cover"
                                        }}

                                    />

                                    <div className="card-body">

                                        <h5 className="card-title">
                                            {producto.nombre}
                                        </h5>

                                        <p>
                                            <strong>Precio:</strong>
                                            {" $"}
                                            {producto.precio}
                                        </p>

 <p>
    <strong>Stock:</strong>
    {" "}
    {producto.stock ?? 0}
</p>

                                        <button
                                            className="btn btn-primary w-100"
                                            onClick={() =>
                                                agregarCarrito(producto)
                                            }
                                        >
                                            Agregar al carrito
                                        </button>

                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="col-12">
                            <div className="alert alert-warning">
                                No hay productos registrados.
                            </div>
                        </div>
                    )}

                </div>

                <hr />

   <h3>Carrito de Compras</h3>

<p>
    Productos en carrito: {carrito.length}
</p>

<table className="table table-bordered">

    <thead className="table-dark">
        <tr>
            <th>Producto</th>
            <th>Cantidad</th>
            <th>Precio Unitario</th>
            <th>Subtotal</th>
        </tr>
    </thead>

    <tbody>
        {carrito.map((item, index) => (
            <tr key={index}>
                <td>{item.nombre}</td>
                <td>{item.cantidad || 1}</td>
                <td>${item.precio}</td>
                <td>
                    $
                    {(item.precio * (item.cantidad || 1)).toFixed(2)}
                </td>
            </tr>
        ))}
    </tbody>

</table>
                <div className="alert alert-success">
                    <h4>
                        Total a pagar: $
                        {totalPagar.toFixed(2)}
                    </h4>
                </div>

                <button
                    className="btn btn-success"
                    onClick={comprarProductos}
                >
                    Comprar
                </button>

            </div>
        </>
    );
}

export default ProductosCliente;