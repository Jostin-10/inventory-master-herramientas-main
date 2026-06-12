import { useEffect, useState } from "react";
import api from "../services/api";
import Layout from "../layouts/Layout";

interface Cliente {
  id: number;
  nombre: string;
  [key: string]: unknown;
}

export default function Clientes() {
  const [clientes, setClientes] = useState<Cliente[]>([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    cargarClientes();
  }, []);

  async function cargarClientes() {
    try {
      const respuesta = await api.get("/clientes");

      if (Array.isArray(respuesta.data)) {
        setClientes(respuesta.data);
      }
    } catch (error) {
      console.error("Error cargando clientes:", error);
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
        Gestión de Clientes
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
          Clientes ({clientes.length})
        </h2>

        {cargando ? (
          <p>Cargando clientes...</p>
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
              </tr>
            </thead>

            <tbody>
              {clientes.length > 0 ? (
                clientes.map((cliente) => (
                  <tr key={cliente.id}>
                    <td style={td}>{cliente.id}</td>
                    <td style={td}>{cliente.nombre}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td style={td} colSpan={2}>
                    No existen clientes registrados
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