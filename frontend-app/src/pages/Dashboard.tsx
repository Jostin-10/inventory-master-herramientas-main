import Layout from "../layouts/Layout";

export default function Dashboard() {
  return (
    <Layout>
      <h1
        style={{
          color: "#00288e",
          marginBottom: "30px",
        }}
      >
        Panel de Control
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
          gap: "20px",
        }}
      >
        <Card titulo="Productos" valor="3" />
        <Card titulo="Categorías" valor="1" />
        <Card titulo="Clientes" valor="0" />
        <Card titulo="Ventas" valor="0" />
      </div>
    </Layout>
  );
}

function Card({
  titulo,
  valor,
}: {
  titulo: string;
  valor: string;
}) {
  return (
    <div
      style={{
        background: "white",
        padding: "20px",
        borderRadius: "12px",
        boxShadow: "0 2px 10px rgba(0,0,0,.08)",
      }}
    >
      <h3>{titulo}</h3>
      <h1>{valor}</h1>
    </div>
  );
}