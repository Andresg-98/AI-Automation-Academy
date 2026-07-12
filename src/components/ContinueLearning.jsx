import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { UserContext } from "../context/UserContext";
import courses from "../data/courses";

function ContinueLearning() {

  const { user } = useContext(UserContext);

  const navigate = useNavigate();

  const currentLessons = user.currentLesson || {};

  const courseInProgress = courses.find((course) => {

    const lesson = currentLessons[course.id];

    return lesson !== undefined && lesson >= 0;

  });

  if (!courseInProgress) {

    return (

      <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">

        <h2 className="text-2xl font-bold">

          🚀 Comienza tu aprendizaje

        </h2>

        <p className="text-slate-400 mt-3">

          Aún no has iniciado ningún curso. Explora el catálogo y comienza tu
          primera lección.

        </p>

        <button

          onClick={() => navigate("/cursos")}

          className="mt-6 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl transition-all"

        >

          Ver cursos

        </button>

      </div>

    );

  }

  const progreso = user.progress[courseInProgress.id] || 0;

  return (

    <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700 shadow-lg">

      <div className="flex justify-between items-center flex-wrap gap-6">

        <div>

          <p className="text-blue-400 font-semibold">

            ▶ Continúa aprendiendo

          </p>

          <h2 className="text-3xl font-bold mt-2">

            {courseInProgress.title}

          </h2>

          <p className="text-slate-400 mt-3">

            Has completado el {progreso}% del curso.

          </p>

        </div>

        <button

          onClick={() => navigate(`/course/${courseInProgress.id}`)}

          className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl transition-all"

        >

          Continuar Curso

        </button>

      </div>

      <div className="mt-8">

        <div className="w-full bg-slate-700 rounded-full h-4">

          <div

            className="bg-blue-500 h-4 rounded-full transition-all duration-500"

            style={{

              width: `${progreso}%`

            }}

          />

        </div>

      </div>

    </div>

  );

}

export default ContinueLearning;