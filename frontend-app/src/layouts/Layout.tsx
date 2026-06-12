import { Link } from "react-router-dom";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        background: "#f6fafe",
        fontFamily: "Inter, sans-serif",
      }}
    >
      <aside
        style={{
          width: "280px",
          background: "white",
          borderRight: "1px solid #dfe3e7",
          padding: "24px",
          boxShadow: "0 2px 10px rgba(0,0,0,.05)",
        }}
      >
        <h2
          style={{
            color: "#00288e",
            marginBottom: "30px",
          }}
        >
          Inventory Master
        </h2>

        <nav
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
          }}
        >
          <Link to="/admin">Dashboard</Link>
          <Link to="/admin/productos">Productos</Link>
          <Link to="/admin/categorias">Categorías</Link>
          <Link to="/admin/clientes">Clientes</Link>
          <Link to="/admin/ventas">Ventas</Link>
        </nav>
      </aside>

      <main
        style={{
          flex: 1,
          padding: "30px",
        }}
      >
        {children}
      </main>
    </div>
  );
}