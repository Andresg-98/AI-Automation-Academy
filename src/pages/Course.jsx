import { useParams } from "react-router-dom";
import courses from "../data/courses";

function Course() {

  const { id } = useParams();

  const course = courses.find((c) => c.id === id);

  if (!course) {
    return (
      <div className="flex-1 p-10">
        <h1 className="text-4xl font-bold">
          Curso no encontrado
        </h1>
      </div>
    );
  }

  return (

    <div className="flex-1 p-10">

      <h1 className="text-4xl font-bold">
        {course.title}
      </h1>

      <p className="text-slate-400 mt-3">
        {course.lesson}
      </p>

      <div className="bg-slate-800 rounded-xl p-8 mt-8">

        <h2 className="text-2xl font-bold">
          📖 Contenido
        </h2>

        <p className="mt-5 text-slate-300 leading-8">
          {course.description}
        </p>

        <div className="mt-6">

          <p>
            ⭐ Dificultad:
            <strong> {course.difficulty}</strong>
          </p>

          <p className="mt-2">
            🏆 Recompensa:
            <strong> +{course.xp} XP</strong>
          </p>

        </div>

      </div>

      <button
        className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg mt-8"
      >
        Completar lección
      </button>

    </div>

  );
}

export default Course;