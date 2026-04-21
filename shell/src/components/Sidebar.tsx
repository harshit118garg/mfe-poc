import { Link, useLocation } from "react-router-dom";
import type { RemoteConfig } from "../loadRemote";

interface SidebarProps {
  modules: RemoteConfig[];
}

const Sidebar = (props: SidebarProps) => {
  const location = useLocation();

  return (
    <aside
      style={{
        width: "200px",
        minHeight: "100vh",
        backgroundColor: "#1a1a2e",
        color: "#ffffff",
        padding: "1.5rem 1rem",
        display: "flex",
        flexDirection: "column",
        gap: "0.5rem",
      }}
    >
      <div style={{ marginBottom: "1rem" }}>
        <h2 style={{ fontSize: "1.1rem", margin: 0, fontWeight: 600 }}>Menu</h2>
      </div>
      <nav style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
        <Link
          to="/"
          style={{
            padding: "0.5rem 0.75rem",
            color: location.pathname === "/" ? "#00d9ff" : "#b0b0b0",
            textDecoration: "none",
            borderRadius: "4px",
            fontSize: "0.9rem",
            transition: "color 0.2s, background-color 0.2s",
          }}
        >
          Home
        </Link>
        {props.modules.map((module) => (
          <Link
            key={module.route}
            to={module.route}
            style={{
              padding: "0.5rem 0.75rem",
              color: location.pathname === module.route ? "#00d9ff" : "#b0b0b0",
              textDecoration: "none",
              borderRadius: "4px",
              fontSize: "0.9rem",
              transition: "color 0.2s, background-color 0.2s",
            }}
          >
            {module.type === "external" ? module.module : module.name}
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
