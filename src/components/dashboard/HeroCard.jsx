import { useContext } from "react";

import { UserContext } from "../../context/UserContext";

import courses from "../../data/courses";
import logros from "../../data/logros";

import { ProgressBar } from "../../ui";

import {

  getDashboardInsights

} from "../../services/dashboard/dashboardService";

function HeroCard() {

  const { user } = useContext(UserContext);

  const insights = getDashboardInsights(

    user,

    courses,

    logros

  );

  return (

    <div className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-3xl p-8 shadow-xl">

      <div className="flex justify-between items-start flex-wrap gap-8">

        <div>

          <p className="text-blue-100 uppercase tracking-widest text-sm">

            AI Academy

          </p>

          <h2 className="text-4xl font-bold mt-2">

            Nivel {insights.nivel}

          </h2>

          <p className="mt-3 text-blue-100">

            Solo necesitas {insights.xpRestante} XP para subir de nivel.

          </p>

        </div>

        <div className="text-right">

          <p className="text-blue-100">

            XP Actual

          </p>

          <h2 className="text-5xl font-bold">

            {user.xp}

          </h2>

        </div>

      </div>

      <div className="mt-8">

        <div className="flex justify-between mb-3">

          <span>

            Progreso del nivel

          </span>

          <span>

            {insights.xpActual}/300 XP

          </span>

        </div>

        <ProgressBar

          value={insights.porcentaje}

          height="h-4"

          color="bg-white"

        />

      </div>

    </div>

  );

}

export default HeroCard;