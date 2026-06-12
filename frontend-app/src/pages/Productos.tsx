import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../services/api";
import Layout from "../layouts/Layout";

interface Producto {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number | string;
  stock: number;
}

export default function Productos() {
  const [productos, setProductos] = useState<Producto[]>([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    cargarProductos();
  }, []);

  async function cargarProductos() {
    try {
      const respuesta = await api.get("/productos");

      if (Array.isArray(respuesta.data)) {
        setProductos(respuesta.data);
      }
    } catch (error) {
      console.error("Error cargando productos:", error);
    } finally {
      setCargando(false);
    }
  }

  return (
    <Layout>
      <div
        style={{
          color: "#000",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "30px",
          }}
        >
          <div>
            <h1
              style={{
                margin: 0,
                color: "#00288e",
              }}
            >
              Gestión de Productos
            </h1>

            <p style={{ color: "#666" }}>
              Administración del inventario industrial
            </p>
          </div>

          <Link to="/admin/productos/nuevo">
            <button
              style={{
                background: "#1e40af",
                color: "white",
                border: "none",
                padding: "12px 20px",
                borderRadius: "8px",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              Nuevo Producto
            </button>
          </Link>
        </div>

        <div
          style={{
            background: "white",
            borderRadius: "12px",
            padding: "20px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
          }}
        >
          <h2
            style={{
              color: "#00288e",
              marginBottom: "20px",
            }}
          >
            Inventario Actual ({productos.length})
          </h2>

          {cargando ? (
            <p>Cargando productos...</p>
          ) : (
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
              }}
            >
              <thead>
                <tr
                  style={{
                    background: "#eef4ff",
                  }}
                >
                  <th style={th}>ID</th>
                  <th style={th}>Producto</th>
                  <th style={th}>Descripción</th>
                  <th style={th}>Precio</th>
                  <th style={th}>Stock</th>
                </tr>
              </thead>

              <tbody>
                {productos.length > 0 ? (
                  productos.map((producto) => (
                    <tr key={producto.id}>
                      <td style={td}>{producto.id}</td>
                      <td style={td}>{producto.nombre}</td>
                      <td style={td}>{producto.descripcion}</td>
                      <td style={td}>${producto.precio}</td>
                      <td style={td}>{producto.stock}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td style={td} colSpan={5}>
                      No existen productos registrados
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </Layout>
  );
}

const th: React.CSSProperties = {
  padding: "12px",
  borderBottom: "1px solid #ddd",
  textAlign: "left",
};

const td: React.CSSProperties = {
  padding: "12px",
  borderBottom: "1px solid #eee",
};