import { useState } from "react";

import CourseCard from "../components/CourseCard";
import ProgressCard from "../components/ProgressCard";
import courses from "../data/courses";

function Dashboard() {

  const [usuario] = useState({

    nombre: "Andrés",

    nivel: 3,

    xp: 300,

    racha: 4,

    cursos: courses.length,

    automatizaciones: 0

  });

  return (

    <div className="flex-1 p-10">

      <h1 className="text-4xl font-bold">

        Bienvenido {usuario.nombre} 👋

      </h1>

      <p className="text-slate-400 mt-2">

        Sigue aprendiendo IA y Automatización.

      </p>

      <div className="grid md:grid-cols-4 gap-5 mt-8">

        <div className="bg-slate-800 rounded-xl p-5">

          <h3 className="text-slate-400">Nivel</h3>

          <p className="text-3xl font-bold">

            {usuario.nivel}

          </p>

        </div>

        <div className="bg-slate-800 rounded-xl p-5">

          <h3 className="text-slate-400">XP</h3>

          <p className="text-3xl font-bold">

            {usuario.xp}

          </p>

        </div>

        <div className="bg-slate-800 rounded-xl p-5">

          <h3 className="text-slate-400">Cursos</h3>

          <p className="text-3xl font-bold">

            {usuario.cursos}

          </p>

        </div>

        <div className="bg-slate-800 rounded-xl p-5">

          <h3 className="text-slate-400">Racha</h3>

          <p className="text-3xl font-bold">

            🔥 {usuario.racha}

          </p>

        </div>

      </div>

      <div className="mt-8">

        <ProgressCard xp={usuario.xp} />

      </div>

      <div className="grid md:grid-cols-3 gap-6 mt-10">

        {courses.map((course) => (

          <CourseCard

            key={course.id}

            id={course.id}

            title={course.title}

            progress="0%"

          />

        ))}

      </div>

    </div>

  );

}

export default Dashboard;