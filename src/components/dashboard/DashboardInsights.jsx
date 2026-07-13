import { useContext } from "react";

import { UserContext } from "../../context/UserContext";

import courses from "../../data/courses";
import logros from "../../data/logros";

import {

  getDashboardInsights

} from "../../services/dashboard/dashboardService";

function DashboardInsights() {

  const { user } = useContext(UserContext);

  const insights = getDashboardInsights(

    user,

    courses,

    logros

  );

  return (

    <div className="grid lg:grid-cols-3 gap-6 mt-10">

      <div className="bg-slate-800 rounded-2xl p-6">

        <h3 className="text-lg font-bold">

          🎯 Objetivo

        </h3>

        <p className="text-slate-400 mt-3">

          Solo te faltan

          <span className="text-green-400 font-bold">

            {" "}

            {insights.xpRestante} XP

          </span>

          {" "}para alcanzar el nivel {insights.nivel + 1}.

        </p>

      </div>

      <div className="bg-slate-800 rounded-2xl p-6">

        <h3 className="text-lg font-bold">

          📚 Siguiente curso

        </h3>

        <p className="text-slate-400 mt-3">

          {

            insights.siguienteCurso

              ? insights.siguienteCurso.title

              : "Has completado todos los cursos."

          }

        </p>

      </div>

      <div className="bg-slate-800 rounded-2xl p-6">

        <h3 className="text-lg font-bold">

          🏆 Logros

        </h3>

        <p className="text-slate-400 mt-3">

          Has desbloqueado

          <span className="text-yellow-400 font-bold">

            {" "}

            {insights.logrosDesbloqueados}

          </span>

          {" "}logros.

        </p>

      </div>

    </div>

  );

}

export default DashboardInsights;