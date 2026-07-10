import { useContext } from "react";
import { UserContext } from "../context/UserContext";

function Header() {

  const { user } = useContext(UserContext);

  const nivel = Math.floor(user.xp / 300) + 1;

  return (

    <header className="bg-slate-800 border-b border-slate-700 px-8 py-4 flex justify-between items-center">

      <div>

        <h2 className="text-xl font-bold">

          👋 Hola, {user.name}

        </h2>

        <p className="text-slate-400 text-sm">

          Bienvenido nuevamente a AI Academy

        </p>

      </div>

      <div className="flex items-center gap-6">

        <div className="text-center">

          <p className="text-slate-400 text-sm">

            Nivel

          </p>

          <p className="font-bold">

            {nivel}

          </p>

        </div>

        <div className="text-center">

          <p className="text-slate-400 text-sm">

            XP

          </p>

          <p className="font-bold text-green-400">

            {user.xp}

          </p>

        </div>

        <button

          className="bg-slate-700 hover:bg-slate-600 rounded-full w-11 h-11 text-xl transition-all"

        >

          🔔

        </button>

      </div>

    </header>

  );

}

export default Header;