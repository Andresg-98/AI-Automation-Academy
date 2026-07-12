import { Link, useLocation } from "react-router-dom";

function Sidebar() {

  const location = useLocation();

  const menu = [

    {
      name: "🏠 Dashboard",
      path: "/"
    },

    {
      name: "📚 Cursos",
      path: "/cursos"
    },

    {
      name: "🧪 Laboratorio",
      path: "/laboratorio"
    },

    {
      name: "🤖 Tutor IA",
      path: "/tutor"
    },

    {
      name: "🏆 Logros",
      path: "/logros"
    },

    {
      name: "📜 Certificados",
      path: "/certificados"
    },

    {
      name: "⚙ Configuración",
      path: "/configuracion"
    }

  ];

  return (

    <aside className="w-64 bg-slate-900 border-r border-slate-700 min-h-screen p-6">

      <h1 className="text-2xl font-bold text-blue-400 mb-10">

        AI Academy

      </h1>

      <nav className="flex flex-col gap-3">

        {

          menu.map((item) => (

            <Link

              key={item.path}

              to={item.path}

              className={`rounded-lg px-4 py-3 transition-all

              ${

                location.pathname === item.path

                  ? "bg-blue-600"

                  : "hover:bg-slate-800"

              }`}

            >

              {item.name}

            </Link>

          ))

        }

      </nav>

    </aside>

  );

}

export default Sidebar;