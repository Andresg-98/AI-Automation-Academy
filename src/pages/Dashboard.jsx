import { useContext } from "react";

import { UserContext } from "../context/UserContext";

import CourseCard from "../components/CourseCard";
import ProgressCard from "../components/ProgressCard";

import courses from "../data/courses";

function Dashboard() {

  const { user } = useContext(UserContext);

  const xpPorNivel = 300;

  const nivelActual =
    Math.floor(user.xp / xpPorNivel) + 1;

  return (

    <div className="flex-1 p-10">

      <h1 className="text-4xl font-bold">

        Bienvenido {user.name} 👋

      </h1>

      <p className="text-slate-400 mt-2">

        Sigue aprendiendo IA y Automatización.

      </p>

      <div className="grid md:grid-cols-4 gap-5 mt-8">

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

      </div>

      <div className="mt-8">

        <ProgressCard xp={user.xp} />

      </div>

      <div className="grid md:grid-cols-3 gap-6 mt-10">

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