import { Link, useNavigate } from "react-router-dom";

function NavbarAdmin(){
    const navigate = useNavigate();
    const usuario=JSON.parse(localStorage.getItem("usuario"));
    if(!usuario || usuario.rol.id_rol !==1){
        return null;
    }
    const logout= () => {
        localStorage.clear();
        navigate("/login");
    };
    return(
        <nav className="navbar navbar-dark bg-dark">
            <div className="container">
                <Link className="navbar-brand" to="/admin">Administracion Cafeteria</Link>
                <div>
                    <Link className="btn btn-outline-light me-2" to="/productos">Productos</Link>
                    <Link className="btn btn-outline-light me-2" to="/categorias">Categorias</Link>
                    <Link className="btn btn-outline-light me-2" to="/usuarios">Usuarios</Link>
                    <button className="btn btn-danger" onClick={logout}>Cerrar Sesion</button>
                </div>
            </div>

        </nav>
    );
}
export default NavbarAdmin;