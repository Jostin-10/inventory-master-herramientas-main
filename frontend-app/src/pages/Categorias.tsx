import { useEffect, useState } from "react";
import api from "../services/api";
import Layout from "../layouts/Layout";

interface Categoria {
  id: number;
  nombre: string;
  descripcion: string;
}

export default function Categorias() {
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    cargarCategorias();
  }, []);

  async function cargarCategorias() {
    try {
      const respuesta = await api.get("/categorias");
      setCategorias(respuesta.data);
    } catch (error) {
      console.error("Error cargando categorías:", error);
    } finally {
      setCargando(false);
    }
  }

  return (
    <Layout>
      <h1
        style={{
          color: "#00288e",
          marginBottom: "20px",
        }}
      >
        Gestión de Categorías
      </h1>

      <div
        style={{
          background: "white",
          padding: "20px",
          borderRadius: "12px",
          boxShadow: "0 2px 10px rgba(0,0,0,.08)",
        }}
      >
        <h2
          style={{
            color: "#00288e",
            marginBottom: "20px",
          }}
        >
          Categorías ({categorias.length})
        </h2>

        {cargando ? (
          <p>Cargando categorías...</p>
        ) : (
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
            }}
          >
            <thead>
              <tr style={{ background: "#eef4ff" }}>
                <th style={th}>ID</th>
                <th style={th}>Nombre</th>
                <th style={th}>Descripción</th>
              </tr>
            </thead>

            <tbody>
              {categorias.length > 0 ? (
                categorias.map((categoria) => (
                  <tr key={categoria.id}>
                    <td style={td}>{categoria.id}</td>
                    <td style={td}>{categoria.nombre}</td>
                    <td style={td}>{categoria.descripcion}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td style={td} colSpan={3}>
                    No existen categorías registradas
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        )}
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