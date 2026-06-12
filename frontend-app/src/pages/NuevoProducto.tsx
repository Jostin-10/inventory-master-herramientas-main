import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import Layout from "../layouts/Layout";

export default function NuevoProducto() {
  const navigate = useNavigate();

  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [precio, setPrecio] = useState("");
  const [stock, setStock] = useState("");

  const guardarProducto = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    try {
      await api.post("/productos", {
        nombre,
        descripcion,
        precio: Number(precio),
        stock: Number(stock),
        categoriaId: 1,
      });

      alert("Producto creado correctamente");

      navigate("/admin/productos");
    } catch (error) {
      console.error(error);
      alert("Error al guardar producto");
    }
  };

  return (
    <Layout>
      <h1
        style={{
          color: "#00288e",
          marginBottom: "20px",
        }}
      >
        Nuevo Producto
      </h1>

      <div
        style={{
          background: "white",
          padding: "30px",
          borderRadius: "12px",
          maxWidth: "700px",
          boxShadow: "0 2px 10px rgba(0,0,0,.08)",
        }}
      >
        <form onSubmit={guardarProducto}>
          <div style={{ marginBottom: "15px" }}>
            <label>Nombre</label>

            <input
              type="text"
              value={nombre}
              onChange={(e) =>
                setNombre(e.target.value)
              }
              style={input}
              required
            />
          </div>

          <div style={{ marginBottom: "15px" }}>
            <label>Descripción</label>

            <textarea
              value={descripcion}
              onChange={(e) =>
                setDescripcion(e.target.value)
              }
              style={{
                ...input,
                height: "100px",
              }}
              required
            />
          </div>

          <div style={{ marginBottom: "15px" }}>
            <label>Precio</label>

            <input
              type="number"
              step="0.01"
              value={precio}
              onChange={(e) =>
                setPrecio(e.target.value)
              }
              style={input}
              required
            />
          </div>

          <div style={{ marginBottom: "20px" }}>
            <label>Stock</label>

            <input
              type="number"
              value={stock}
              onChange={(e) =>
                setStock(e.target.value)
              }
              style={input}
              required
            />
          </div>

          <button
            type="submit"
            style={{
              background: "#1e40af",
              color: "white",
              border: "none",
              padding: "12px 20px",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            Guardar Producto
          </button>
        </form>
      </div>
    </Layout>
  );
}

const input: React.CSSProperties = {
  width: "100%",
  padding: "10px",
  marginTop: "5px",
  borderRadius: "8px",
  border: "1px solid #ccc",
  boxSizing: "border-box",
};