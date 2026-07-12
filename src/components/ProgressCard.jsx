import { useContext } from "react";

import { UserContext } from "../context/UserContext";

import courses from "../data/courses";
import logros from "../data/logros";

function ProgressCard() {

  const { user } = useContext(UserContext);

  const xpPorNivel = 300;

  const nivel = Math.floor(user.xp / xpPorNivel) + 1;

  const xpActual = user.xp % xpPorNivel;

  const porcentaje = (xpActual / xpPorNivel) * 100;

  const xpRestante = xpPorNivel - xpActual;

  const logrosDesbloqueados = logros.filter(

    (logro) =>

      user.completedCourses.length >= logro.requirement

  ).length;

  return (

    <div className="bg-slate-800 rounded-2xl p-8 shadow-lg border border-slate-700">

      <h2 className="text-3xl font-bold">

        📈 Tu progreso

      </h2>

      <p className="text-slate-400 mt-2">

        Nivel {nivel}

      </p>

      <div className="w-full bg-slate-700 rounded-full h-5 mt-6 overflow-hidden">

        <div

          className="bg-green-500 h-5 rounded-full transition-all duration-700"

          style={{

            width: `${porcentaje}%`

          }}

        ></div>

      </div>

      <div className="flex justify-between mt-3 text-sm text-slate-400">

        <span>

          {xpActual} / {xpPorNivel} XP

        </span>

        <span>

          {Math.round(porcentaje)}%

        </span>

      </div>

      <p className="mt-6 text-slate-300">

        Te faltan <span className="font-bold text-green-400">

          {xpRestante} XP

        </span> para alcanzar el nivel <span className="font-bold">

          {nivel + 1}

        </span>

      </p>

      <div className="border-t border-slate-700 mt-8 pt-6 grid md:grid-cols-3 gap-6">

        <div>

          <p className="text-slate-400">

            🔥 Racha

          </p>

          <h3 className="text-2xl font-bold mt-2">

            {user.streak} días

          </h3>

        </div>

        <div>

          <p className="text-slate-400">

            📚 Cursos

          </p>

          <h3 className="text-2xl font-bold mt-2">

            {user.completedCourses.length} / {courses.length}

          </h3>

        </div>

        <div>

          <p className="text-slate-400">

            🏆 Logros

          </p>

          <h3 className="text-2xl font-bold mt-2">

            {logrosDesbloqueados}

          </h3>

        </div>

      </div>

    </div>

  );

}

export default ProgressCard;