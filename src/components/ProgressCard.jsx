import { useContext } from "react";

import { UserContext } from "../context/UserContext";

import courses from "../data/courses";
import logros from "../data/logros";

import {

  Card,

  ProgressBar,

  Badge

} from "../ui";

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

    <Card>

      <div className="flex justify-between items-center">

        <h2 className="text-3xl font-bold">

          📈 Tu progreso

        </h2>

        <Badge color="green">

          Nivel {nivel}

        </Badge>

      </div>

      <div className="mt-6">

        <ProgressBar

          value={porcentaje}

          color="bg-green-500"

          showLabel

        />

      </div>

      <div className="flex justify-between mt-4 text-sm text-slate-400">

        <span>

          {xpActual} / {xpPorNivel} XP

        </span>

        <span>

          {Math.round(porcentaje)}%

        </span>

      </div>

      <p className="mt-6 text-slate-300">

        Te faltan

        <span className="font-bold text-green-400">

          {" "}

          {xpRestante} XP

        </span>

        {" "}para alcanzar el

        <span className="font-bold">

          {" "}Nivel {nivel + 1}

        </span>

      </p>

      <div className="grid md:grid-cols-3 gap-6 mt-8 pt-8 border-t border-slate-700">

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

    </Card>

  );

}

export default ProgressCard;