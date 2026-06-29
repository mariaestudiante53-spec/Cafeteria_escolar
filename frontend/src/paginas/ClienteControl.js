import NavbarCliente from "../componentes/NavbarCliente";

function ClienteControl(){
    const usuario = JSON.parse(localStorage.getItem("usuario"));
    return(
        <div>
            <NavbarCliente/>
            <div className="container mt-4">
                <h1>
                    Bienvenido {usuario.nombre}
                </h1>
                <p>
                    Explora el menu de la cafeteria escolar
                </p>
                                         <div className="col-md-3">
               <Link to="/productos" className="text-decoration-none text-dark">
               <div className="card p-3 shadow">
            <h5>Productos</h5>
            <p>Adquiere aqui tus productos</p>
        </div>
    </Link>
</div>
                
            </div>
        </div>
        
    );
}
export default ClienteControl;