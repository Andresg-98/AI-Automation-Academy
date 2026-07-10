import { useNavigate } from "react-router-dom";

function ContinueCard({ course }) {

  const navigate = useNavigate();

  return (
    <div className="bg-gradient-to-r from-blue-700 to-blue-500 rounded-xl p-8 shadow-xl">

      <p className="text-blue-100 text-sm">
        CONTINUAR APRENDIENDO
      </p>

      <h2 className="text-3xl font-bold mt-2">
        {course.title}
      </h2>

      <p className="mt-4">
        Progreso: {course.progress}%
      </p>

      <div className="w-full bg-blue-900 rounded-full h-3 mt-4">

        <div
          className="bg-white h-3 rounded-full transition-all duration-500"
          style={{
            width: `${course.progress}%`
          }}
        ></div>

      </div>

      <button

        onClick={() => navigate(`/course/${course.id}`)}

        className="bg-white text-blue-700 font-bold px-6 py-3 rounded-lg mt-8 hover:scale-105 transition-all"

      >
        Continuar Curso →
      </button>

    </div>
  );

}

export default ContinueCard;