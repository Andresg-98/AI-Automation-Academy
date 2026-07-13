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

    <aside className="w-72 bg-slate-900 border-r border-slate-800 flex flex-col">

      <div className="p-8 border-b border-slate-800">

        <h1 className="text-3xl font-bold text-blue-400">

          AI Academy

        </h1>

        <p className="text-slate-500 mt-2 text-sm">

          Aprende IA como un profesional

        </p>

      </div>

      <nav className="flex-1 px-5 py-8">

        <div className="flex flex-col gap-2">

          {

            menu.map((item) => (

              <Link

                key={item.path}

                to={item.path}

                className={`

                  rounded-xl

                  px-5

                  py-4

                  transition-all

                  duration-300

                  font-medium

                  ${

                    location.pathname === item.path

                      ? "bg-blue-600 shadow-lg"

                      : "hover:bg-slate-800"

                  }

                `}

              >

                {item.name}

              </Link>

            ))

          }

        </div>

      </nav>

      <div className="border-t border-slate-800 p-6">

        <p className="text-xs text-slate-500 text-center">

          AI Academy v0.3

        </p>

      </div>

    </aside>

  );

}

export default Sidebar;