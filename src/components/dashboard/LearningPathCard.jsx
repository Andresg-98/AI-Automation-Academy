import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { UserContext } from "../../context/UserContext";

import courses from "../../data/courses";

import {
  getNextRecommendedCourse
} from "../../services/logic/learningPathService";

function LearningPathCard() {

  const { user } = useContext(UserContext);

  const navigate = useNavigate();

  const nextCourse = getNextRecommendedCourse(
    user,
    courses
  );

  if (!nextCourse) {

    return (

      <div className="bg-slate-800 rounded-2xl p-8 mt-10">

        <h2 className="text-2xl font-bold">

          🎉 ¡Felicidades!

        </h2>

        <p className="text-slate-400 mt-3">

          Has completado todos los cursos disponibles.

        </p>

      </div>

    );

  }

  return (

    <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-8 mt-10 shadow-xl">

      <p className="uppercase text-sm tracking-widest text-purple-200">

        Ruta recomendada

      </p>

      <h2 className="text-3xl font-bold mt-2">

        {nextCourse.title}

      </h2>

      <p className="mt-3 text-purple-100">

        Este es el siguiente curso recomendado según tu progreso.

      </p>

      <button

        onClick={() => navigate(`/course/${nextCourse.id}`)}

        className="bg-white text-slate-900 font-bold px-6 py-3 rounded-xl mt-6 hover:scale-105 transition"

      >

        Comenzar curso

      </button>

    </div>

  );

}

export default LearningPathCard;