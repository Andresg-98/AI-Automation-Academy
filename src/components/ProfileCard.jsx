import { useContext } from "react";
import { UserContext } from "../context/UserContext";

function ProfileCard() {

  const { user } = useContext(UserContext);

  const xpPorNivel = 300;

  const nivel = Math.floor(user.xp / xpPorNivel) + 1;

  const progresoNivel = user.xp % xpPorNivel;

  return (

    <div className="bg-slate-800 rounded-xl p-6 shadow-lg">

      <div className="flex items-center gap-5">

        <div className="w-20 h-20 rounded-full bg-blue-600 flex items-center justify-center text-3xl font-bold">

          {user.name.charAt(0).toUpperCase()}

        </div>

        <div>

          <h2 className="text-2xl font-bold">

            {user.name}

          </h2>

          <p className="text-slate-400">

            Nivel {nivel}

          </p>

        </div>

      </div>

      <div className="mt-6">

        <div className="flex justify-between text-sm mb-2">

          <span>

            Progreso al siguiente nivel

          </span>

          <span>

            {progresoNivel}/{xpPorNivel} XP

          </span>

        </div>

        <div className="w-full bg-slate-700 rounded-full h-3">

          <div

            className="bg-blue-500 h-3 rounded-full transition-all duration-300"

            style={{

              width: `${(progresoNivel / xpPorNivel) * 100}%`

            }}

          ></div>

        </div>

      </div>

      <div className="grid grid-cols-3 gap-4 mt-8">

        <div className="text-center">

          <p className="text-2xl font-bold">

            ⭐ {user.xp}

          </p>

          <p className="text-slate-400 text-sm">

            XP

          </p>

        </div>

        <div className="text-center">

          <p className="text-2xl font-bold">

            🔥 {user.streak}

          </p>

          <p className="text-slate-400 text-sm">

            Racha

          </p>

        </div>

        <div className="text-center">

          <p className="text-2xl font-bold">

            🏆 {user.completedCourses.length}

          </p>

          <p className="text-slate-400 text-sm">

            Cursos

          </p>

        </div>

      </div>

    </div>

  );

}

export default ProfileCard;