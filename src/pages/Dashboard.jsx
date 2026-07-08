import { useState } from "react";

import CourseCard from "../components/CourseCard";
import ProgressCard from "../components/ProgressCard";

function Dashboard() {

  const [xp, setXp] = useState(120);

  return (
    <div className="flex-1 p-10">

      <h1 className="text-4xl font-bold">
        Bienvenido Andrés 👋
      </h1>

      <p className="text-slate-400 mt-2">
        Continúa aprendiendo IA y Automatización.
      </p>

      <div className="mt-6">

        <h2 className="text-xl font-semibold">

          XP Actual: {xp}

        </h2>

        <button
          onClick={() => setXp(xp + 25)}
          className="bg-green-600 hover:bg-green-700 px-5 py-2 rounded-lg mt-4 transition-colors"
        >
          Completar lección (+25 XP)
        </button>

      </div>

      <div className="mt-8">

        <ProgressCard xp={xp} />

      </div>

      <div className="grid md:grid-cols-3 gap-6 mt-10">

        <CourseCard
          title="React desde cero"
          progress="10%"
        />

        <CourseCard
          title="JavaScript Moderno"
          progress="0%"
        />

        <CourseCard
          title="Automatización con n8n"
          progress="0%"
        />

      </div>

    </div>
  );
}

export default Dashboard;