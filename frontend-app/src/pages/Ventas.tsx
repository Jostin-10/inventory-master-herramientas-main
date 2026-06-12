import { useEffect, useState } from "react";
import api from "../services/api";
import Layout from "../layouts/Layout";

interface Venta {
  id: number;
  [key: string]: unknown;
}

export default function Ventas() {
  const [ventas, setVentas] = useState<Venta[]>([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    cargarVentas();
  }, []);

  async function cargarVentas() {
    try {
      const respuesta = await api.get("/ventas");

      if (Array.isArray(respuesta.data)) {
        setVentas(respuesta.data);
      }
    } catch (error) {
      console.error("Error cargando ventas:", error);
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
        Gestión de Ventas
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
          Ventas ({ventas.length})
        </h2>

        {cargando ? (
          <p>Cargando ventas...</p>
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
                <th style={th}>Información</th>
              </tr>
            </thead>

            <tbody>
              {ventas.length > 0 ? (
                ventas.map((venta) => (
                  <tr key={venta.id}>
                    <td style={td}>{venta.id}</td>
                    <td style={td}>
                      <pre
                        style={{
                          margin: 0,
                          whiteSpace: "pre-wrap",
                          fontSize: "12px",
                        }}
                      >
                        {JSON.stringify(venta, null, 2)}
                      </pre>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td style={td} colSpan={2}>
                    No existen ventas registradas
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