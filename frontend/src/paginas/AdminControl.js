import { Link } from "react-router-dom";
import NavbarAdmin from "../componentes/NavbarAdmin";
function AdminControl() {
const usuario = JSON.parse(localStorage.getItem("usuario"));

    return (
        <div>
            <NavbarAdmin />

            <div className="container mt-4">
                <h1>Panel de Administrador</h1>
                <h4>Bienvenido {usuario.nombre}</h4>

                <div className="row mt-4">

                <div className="col-md-3">
               <Link to="/productos" className="text-decoration-none text-dark">
               <div className="card p-3 shadow">
            <h5>Productos</h5>
            <p>Gestión de productos</p>
        </div>
    </Link>
</div>

                         <div className="col-md-3">
               <Link to="/usuarios" className="text-decoration-none text-dark">
               <div className="card p-3 shadow">
            <h5>Usuarios</h5>
            <p>Gestión de usuarios</p>
        </div>
    </Link>
</div>
           <div className="col-md-3">
               <Link to="/ventass" className="text-decoration-none text-dark">
               <div className="card p-3 shadow">
            <h5>Ventas</h5>
            <p>Gestión de ventass</p>
        </div>
    </Link>
</div>
           <div className="col-md-3">
               <Link to="/categoriass" className="text-decoration-none text-dark">
               <div className="card p-3 shadow">
            <h5>Categorias</h5>
            <p>Gestión de categoriass</p>
        </div>
    </Link>
</div>
                </div>
            </div>
        </div>
    );
}

export default AdminControl;