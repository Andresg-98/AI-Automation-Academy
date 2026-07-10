import { Link, useLocation } from "react-router-dom";

function Sidebar() {
  const location = useLocation();

  const menu = [
    {
      icon: "🏠",
      name: "Dashboard",
      path: "/",
    },
    {
      icon: "📚",
      name: "Cursos",
      path: "/cursos",
    },
    {
      icon: "🧪",
      name: "Laboratorio",
      path: "/laboratorio",
    },
    {
      icon: "🤖",
      name: "Tutor IA",
      path: "/tutor",
    },
    {
      icon: "🏆",
      name: "Logros",
      path: "/logros",
    },
    {
      icon: "⚙️",
      name: "Configuración",
      path: "/configuracion",
    },
  ];

  return (
    <aside className="w-64 bg-slate-900 border-r border-slate-700 min-h-screen p-6">

      <h1 className="text-2xl font-bold text-blue-400 mb-10">
        🚀 AI Academy
      </h1>

      <nav className="flex flex-col gap-2">

        {menu.map((item) => (

          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300

            ${
              location.pathname === item.path
                ? "bg-blue-600 text-white shadow-lg"
                : "hover:bg-slate-800 text-slate-300"
            }`}
          >

            <span className="text-xl">
              {item.icon}
            </span>

            <span>
              {item.name}
            </span>

          </Link>

        ))}

      </nav>

    </aside>
  );
}

export default Sidebar;