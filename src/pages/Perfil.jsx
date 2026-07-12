import { useContext } from "react";

import { UserContext } from "../context/UserContext";

import courses from "../data/courses";
import logros from "../data/logros";

function Perfil() {

  const { user } = useContext(UserContext);

  const xpPorNivel = 300;

  const nivel = Math.floor(user.xp / xpPorNivel) + 1;

  const progresoGeneral = Math.round(

    (user.completedCourses.length / courses.length) * 100

  );

  return (

    <div className="flex-1 p-10">

      <div className="bg-slate-800 rounded-2xl p-8 shadow-lg">

        <div className="flex items-center gap-6">

          <div className="w-28 h-28 rounded-full bg-blue-600 flex items-center justify-center text-5xl">

            👤

          </div>

          <div>

            <h1 className="text-4xl font-bold">

              {user.name}

            </h1>

            <p className="text-slate-400 mt-2">

              Estudiante de AI Academy

            </p>

          </div>

        </div>

        <div className="grid md:grid-cols-4 gap-5 mt-10">

          <div className="bg-slate-900 rounded-xl p-5">

            <p className="text-slate-400">

              ⭐ Nivel

            </p>

            <h2 className="text-3xl font-bold">

              {nivel}

            </h2>

          </div>

          <div className="bg-slate-900 rounded-xl p-5">

            <p className="text-slate-400">

              💎 XP

            </p>

            <h2 className="text-3xl font-bold">

              {user.xp}

            </h2>

          </div>

          <div className="bg-slate-900 rounded-xl p-5">

            <p className="text-slate-400">

              📚 Cursos

            </p>

            <h2 className="text-3xl font-bold">

              {user.completedCourses.length}

            </h2>

          </div>

          <div className="bg-slate-900 rounded-xl p-5">

            <p className="text-slate-400">

              🏆 Logros

            </p>

            <h2 className="text-3xl font-bold">

              {

                logros.filter(

                  logro =>

                    user.completedCourses.length >= logro.requirement

                ).length

              }

            </h2>

          </div>

        </div>

        <div className="mt-10">

          <h3 className="text-xl font-bold mb-4">

            Progreso General

          </h3>

          <div className="w-full bg-slate-700 rounded-full h-4">

            <div

              className="bg-green-500 h-4 rounded-full transition-all"

              style={{

                width: `${progresoGeneral}%`

              }}

            />

          </div>

          <p className="mt-3 text-slate-400">

            {progresoGeneral}% completado

          </p>

        </div>

      </div>

    </div>

  );

}

export default Perfil;