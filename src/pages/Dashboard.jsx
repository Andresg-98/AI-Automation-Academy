function Dashboard() {
  return (
    <div
      style={{
        flex: 1,
        padding: "40px",
      }}
    >
      <h1>Bienvenido Andrés 👋</h1>

      <h2>AI Automation Academy</h2>

      <br />

      <h3>Nivel 1</h3>

      <p>XP: 0 / 100</p>

      <button
        style={{
          padding: "15px 30px",
          background: "#2563eb",
          color: "white",
          border: "none",
          borderRadius: "10px",
          cursor: "pointer",
        }}
      >
        Continuar Curso
      </button>
    </div>
  );
}

export default Dashboard;