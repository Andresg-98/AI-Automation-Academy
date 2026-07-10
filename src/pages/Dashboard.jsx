import { useContext } from "react";

import { UserContext } from "../context/UserContext";

import CourseCard from "../components/CourseCard";
import ProgressCard from "../components/ProgressCard";
import ContinueCard from "../components/ContinueCard";

import courses from "../data/courses";

function Dashboard() {

  const { user } = useContext(UserContext);

  const xpPorNivel = 300;

  const nivelActual =
    Math.floor(user.xp / xpPorNivel) + 1;

  const cursosCompletados =
    user.completedCourses.length;

  const progresoGlobal = Math.round(

    Object.values(user.progress).reduce(

      (total, progreso) => total + progreso,

      0

    ) / Object.keys(user.progress).length

  );

  const logrosDesbloqueados =
    cursosCompletados;

  const cursoContinuar =
    [...courses]

      .map((course) => ({
        ...course,
        progress: user.progress[course.id]
      }))

      .filter((course) => course.progress < 100)

      .sort((a, b) => b.progress - a.progress)[0] ||

    {
      id: courses[0].id,
      title: courses[0].title,
      progress: 100
    };

  return (

    <div className="flex-1 p-10">

      <h1 className="text-4xl font-bold">

        Bienvenido {user.name} 👋

      </h1>

      <p className="text-slate-400 mt-2">

        Sigue aprendiendo IA y Automatización.

      </p>

      <div className="grid md:grid-cols-3 gap-5 mt-8">

        <div className="bg-slate-800 rounded-xl p-5">
          <h3 className="text-slate-400">
            Nivel
          </h3>

          <p className="text-3xl font-bold">
            {nivelActual}
          </p>
        </div>

        <div className="bg-slate-800 rounded-xl p-5">
          <h3 className="text-slate-400">
            XP
          </h3>

          <p className="text-3xl font-bold">
            {user.xp}
          </p>
        </div>

        <div className="bg-slate-800 rounded-xl p-5">
          <h3 className="text-slate-400">
            Cursos
          </h3>

          <p className="text-3xl font-bold">
            {courses.length}
          </p>
        </div>

        <div className="bg-slate-800 rounded-xl p-5">
          <h3 className="text-slate-400">
            Racha
          </h3>

          <p className="text-3xl font-bold">
            🔥 {user.streak}
          </p>
        </div>

        <div className="bg-slate-800 rounded-xl p-5">
          <h3 className="text-slate-400">
            Logros
          </h3>

          <p className="text-3xl font-bold">
            🏆 {logrosDesbloqueados}
          </p>
        </div>

        <div className="bg-slate-800 rounded-xl p-5">
          <h3 className="text-slate-400">
            Progreso Global
          </h3>

          <p className="text-3xl font-bold">
            {progresoGlobal}%
          </p>
        </div>

      </div>

      <div className="mt-10">

        <ContinueCard course={cursoContinuar} />

      </div>

      <div className="mt-10">

        <ProgressCard xp={user.xp} />

      </div>

      <h2 className="text-2xl font-bold mt-10 mb-6">

        Todos los cursos

      </h2>

      <div className="grid md:grid-cols-3 gap-6">

        {courses.map((course) => (

          <CourseCard

            key={course.id}

            id={course.id}

            title={course.title}

            progress={`${user.progress[course.id]}%`}

          />

        ))}

      </div>

    </div>

  );

}

export default Dashboard;