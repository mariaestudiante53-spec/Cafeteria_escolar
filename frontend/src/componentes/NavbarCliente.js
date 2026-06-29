import { Link, useNavigate, useLocation } from "react-router-dom";

function NavbarCliente() {

    const navigate = useNavigate();
    const location = useLocation();

    const usuario = JSON.parse(localStorage.getItem("usuario"));

    if (!usuario || usuario.rol.id_rol !== 2) {
        return null;
    }

    const logout = () => {
        localStorage.removeItem("usuario");
        navigate("/login");
    };

    return (
        <nav className="navbar navbar-success bg-success">
            <div className="container">

                <Link className="navbar-brand" to="/cliente">
                    Tu cafeteria de confianza
                </Link>

                <div>

                    <Link
                        className="btn btn-outline-light me-2"
                        to="/cliente"
                    >
                        Mis datos
                    </Link>

                    {location.pathname !== "/productoscliente" && (
                        <Link
                            className="btn btn-outline-light me-2"
                            to="/productoscliente"
                        >
                            Productos
                        </Link>
                    )}

                    <button
                        className="btn btn-light"
                        onClick={logout}
                    >
                        Cerrar Sesión
                    </button>

                </div>

            </div>
        </nav>
    );
}

export default NavbarCliente;