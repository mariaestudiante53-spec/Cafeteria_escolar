import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./paginas/Home";
import Login from "./paginas/Login";
import Estudiante from "./paginas/Estudiante";
import AdminControl1 from "./paginas/AdminControl";
import Categorias from "./paginas/Categorias";
import Usuarios from "./paginas/Usuarios";
import Pedidos from "./paginas/Pedidos";
import Cliente from "./paginas/Cliente";
import AdminRoute from "./componentes/AdminRoute";
import ClienteRoute from "./componentes/ClienteRoute";
import ProductosNuevo from "./paginas/ProductosNuevo";
import MenuCliente from "./componentes/MenuCliente";
import ProductosCliente from "./paginas/ProductosCliente";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={
        <AdminRoute>
          <AdminControl1/>
        </AdminRoute>
        }/>
        <Route path="/usuarios" element={
          <AdminRoute>
            <Usuarios/>
          </AdminRoute>
        }/>
        <Route path="/estudiante" element={
          <ClienteRoute>
            <Estudiante/>
          </ClienteRoute>
        } />
        <Route path="/categorias" element={
          <AdminRoute>
            <Categorias/>
          </AdminRoute>
        } />
        <Route path="/pedidos" element={
          <AdminRoute>
            <Pedidos/>
          </AdminRoute>
        } />
        <Route path="/cliente" element={
          <ClienteRoute>
            <Cliente/>
          </ClienteRoute>
        }/>
        <Route path="/productos" element={
          <AdminRoute>
            <ProductosNuevo/>
          </AdminRoute>
        }/>
        <Route path="/menucliente" element={
        <ClienteRoute>
            <MenuCliente />
        </ClienteRoute>
    }/>
    <Route path="/productoscliente" element={
      <ClienteRoute>
        <ProductosCliente/>
      </ClienteRoute>
    }/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;