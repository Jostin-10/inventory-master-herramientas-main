import { BrowserRouter, Routes, Route } from "react-router-dom";

import Inicio from "./pages/Inicio";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Productos from "./pages/Productos";
import NuevoProducto from "./pages/NuevoProducto";
import Categorias from "./pages/Categorias";
import Clientes from "./pages/Clientes";
import Ventas from "./pages/Ventas";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />

        <Route path="/login" element={<Login />} />

        <Route path="/admin" element={<Dashboard />} />

        <Route
          path="/admin/productos"
          element={<Productos />}
        />

        <Route
          path="/admin/productos/nuevo"
          element={<NuevoProducto />}
        />

        <Route
          path="/admin/categorias"
          element={<Categorias />}
        />

        <Route
          path="/admin/clientes"
          element={<Clientes />}
        />

        <Route
          path="/admin/ventas"
          element={<Ventas />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;