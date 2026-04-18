const Header = () => {
  return (
    <header
      style={{
        height: "50px",
        backgroundColor: "#ffffff",
        borderBottom: "1px solid #e0e0e0",
        display: "flex",
        alignItems: "center",
        padding: "0 1.5rem",
        boxShadow: "0 1px 3px rgba(0, 0, 0, 0.05)",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
        <div
          style={{
            width: "24px",
            height: "24px",
            backgroundColor: "#00d9ff",
            borderRadius: "4px",
          }}
        />
        <span style={{ fontSize: "1rem", fontWeight: 600, color: "#1a1a2e" }}>
          MFE Shell
        </span>
      </div>
    </header>
  );
};

export default Header;
