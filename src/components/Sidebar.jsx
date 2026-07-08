import { NavLink } from "react-router-dom";

function Sidebar() {
  const menuItems = [
    { nombre: "🏠 Inicio", ruta: "/" },
    { nombre: "📚 Cursos", ruta: "/cursos" },
    { nombre: "🧪 Laboratorio", ruta: "/laboratorio" },
    { nombre: "🤖 Tutor IA", ruta: "/tutor" },
    { nombre: "🏆 Logros", ruta: "/logros" },
    { nombre: "⚙ Configuración", ruta: "/configuracion" },
  ];

  return (
    <aside className="w-72 bg-slate-800 p-6 border-r border-slate-700">

      <h1 className="text-2xl font-bold mb-8">
        AI Automation Academy
      </h1>

      <nav className="flex flex-col gap-3">

        {menuItems.map((item) => (
          <NavLink
            key={item.ruta}
            to={item.ruta}
            className={({ isActive }) =>
              `p-3 rounded-lg transition-colors ${
                isActive
                  ? "bg-blue-600 text-white"
                  : "hover:bg-slate-700"
              }`
            }
          >
            {item.nombre}
          </NavLink>
        ))}

      </nav>

    </aside>
  );
}

export default Sidebar;