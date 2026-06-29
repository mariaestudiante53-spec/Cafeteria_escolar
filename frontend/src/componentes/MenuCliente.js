import { useEffect, useState } from "react";
import API from "../api/api";
import NavbarCliente from "../componentes/NavbarCliente";

function MenuCliente(){
    const [productos,setProductos] = useState([]);
    useEffect(()=>{
        cargarProductos();
    },[]);
    const cargarProductos = async()=>{
        const res = await API.get("productos/");
        setProductos(res.data);
    };
    return(
        <div className="row">
            <NavbarCliente />
            {productos.map(p=>(
                <div className="col-md-4" key={p.id_producto}>
                    <div className="card shadow p-3 m-2">
                        <h4>{p.nombre}</h4>
                        <p>{p.descripcion}</p>
                        <h5>${p.precio}</h5>
                        <button className="btn btn-success">
                            Agregar
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}
export default MenuCliente;