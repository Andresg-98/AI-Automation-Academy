import { UserContext } from "../context/UserContext";
import { useContext } from "react";

function Topbar() {

  const { user } = useContext(UserContext);

  return (

    <header className="h-20 border-b border-slate-700 bg-slate-900 px-8 flex items-center justify-between">

      <div className="flex items-center gap-4">

        <input

          type="text"

          placeholder="🔍 Buscar cursos..."

          className="bg-slate-800 rounded-xl px-5 py-3 w-96 outline-none border border-slate-700 focus:border-blue-500 transition-all"

        />

      </div>

      <div className="flex items-center gap-6">

        <button className="text-2xl hover:scale-110 transition-all">

          🔔

        </button>

        <div className="flex items-center gap-3">

          <div className="w-11 h-11 rounded-full bg-blue-600 flex items-center justify-center font-bold">

            {user.name.charAt(0).toUpperCase()}

          </div>

          <div>

            <p className="font-semibold">

              {user.name}

            </p>

            <p className="text-sm text-slate-400">

              Estudiante

            </p>

          </div>

        </div>

      </div>

    </header>

  );

}

export default Topbar;