import { useNavigate } from "react-router-dom";

function Cliente() {

    const navigate = useNavigate();

    const usuario = JSON.parse(
        localStorage.getItem("usuario")
    );

    const cerrarSesion = () => {

        localStorage.removeItem("usuario");

        navigate("/login");
    };

    const verProductos = () => {

        navigate("/productoscliente");
    };

    return (
        <div>

            {/* Barra superior */}
            <nav className="navbar navbar-expand-lg navbar-dark bg-success">
                <div className="container-fluid">

                    <span className="navbar-brand">
                        Bienvenido a la cafeteria Escolar
                    </span>

                    <div className="d-flex">

                        <button
                            className="btn btn-light me-2"
                            onClick={verProductos}
                        >
                            Productos
                        </button>

                        <button
                            className="btn btn-danger"
                            onClick={cerrarSesion}
                        >
                            Cerrar Sesión
                        </button>

                    </div>

                </div>
            </nav>

            {/* Información del cliente */}
            <div className="container mt-4">

                <h2>Infromacion del Cliente</h2>

                <table className="table table-bordered">
                    <tbody>
                        <tr>
                            <th>ID</th>
                            <td>{usuario.id_usuario}</td>
                        </tr>

                        <tr>
                            <th>Nombre</th>
                            <td>{usuario.nombre}</td>
                        </tr>

                        <tr>
                            <th>Correo</th>
                            <td>{usuario.email}</td>
                        </tr>

                        <tr>
                            <th>Password</th>
                            <td>{usuario.password}</td>
                        </tr>
                    </tbody>
                </table>

            </div>

        </div>
    );
}

export default Cliente;