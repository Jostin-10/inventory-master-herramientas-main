import { Link } from "react-router-dom";

export default function Inicio() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f6fafe",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Inter, sans-serif",
      }}
    >
      <div
        style={{
          width: "900px",
          background: "white",
          borderRadius: "16px",
          padding: "50px",
          boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "40px",
          }}
        >
          <div>
            <h1
              style={{
                color: "#00288e",
                fontSize: "42px",
                margin: 0,
              }}
            >
              Inventory Master
            </h1>

            <p
              style={{
                color: "#666",
                marginTop: "10px",
              }}
            >
              Sistema de Gestión de Inventario Industrial
            </p>
          </div>

          <Link to="/login">
            <button
              style={{
                background: "#1e40af",
                color: "white",
                border: "none",
                padding: "12px 24px",
                borderRadius: "8px",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              Iniciar Sesión
            </button>
          </Link>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gap: "20px",
          }}
        >
          <div
            style={{
              background: "#eef4ff",
              padding: "20px",
              borderRadius: "12px",
            }}
          >
            <h3>Productos</h3>
            <p>Control completo del inventario.</p>
          </div>

          <div
            style={{
              background: "#eef4ff",
              padding: "20px",
              borderRadius: "12px",
            }}
          >
            <h3>Categorías</h3>
            <p>Organización eficiente de herramientas.</p>
          </div>

          <div
            style={{
              background: "#eef4ff",
              padding: "20px",
              borderRadius: "12px",
            }}
          >
            <h3>Ventas</h3>
            <p>Seguimiento de movimientos y registros.</p>
          </div>
        </div>
      </div>
    </div>
  );
}