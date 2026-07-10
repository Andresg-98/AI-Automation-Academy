import { useState, useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import lessons from "../data/lessons";

import { getCourseById } from "../services/api/coursesApi";

import {
  calculateProgress,
  isLastLesson
} from "../services/logic/courseService";

import { UserContext } from "../context/UserContext";
import { NotificationContext } from "../context/NotificationContext";

function Course() {

  const { id } = useParams();

  const navigate = useNavigate();

  const {
    user,
    updateCurrentLesson,
    completeCourse
  } = useContext(UserContext);

  const { showNotification } = useContext(NotificationContext);

  const course = getCourseById(id);

  const courseLessons = lessons[id] || [];

  const [currentLesson, setCurrentLesson] = useState(

    user.currentLesson?.[id] ?? 0

  );

  useEffect(() => {

    updateCurrentLesson(id, currentLesson);

  }, [currentLesson]);

  if (!course) {

    return (

      <div className="flex-1 p-10">

        <h1 className="text-3xl font-bold">

          Curso no encontrado

        </h1>

      </div>

    );

  }

  const lesson = courseLessons[currentLesson];

  const progress = calculateProgress(

    courseLessons.length,

    currentLesson

  );

  const ultimaLeccion = isLastLesson(

    courseLessons.length,

    currentLesson

  );

  function finalizarCurso() {

    completeCourse(id);

    showNotification(

      "🎉 Curso completado",

      `Has completado "${course.title}" y ganaste +100 XP.`

    );

    navigate("/");

  }

  return (

    <div className="flex-1 p-10">

      <h1 className="text-4xl font-bold">

        {course.title}

      </h1>

      <p className="text-slate-400 mt-2">

        Lección {currentLesson + 1} de {courseLessons.length}

      </p>

      <div className="w-full bg-slate-700 rounded-full h-3 mt-6">

        <div

          className="bg-green-500 h-3 rounded-full transition-all duration-300"

          style={{ width: `${progress}%` }}

        ></div>

      </div>

      <p className="text-right text-sm text-slate-400 mt-2">

        {progress}% completado

      </p>

      <div className="bg-slate-800 rounded-xl p-8 mt-8">

        <h2 className="text-2xl font-bold">

          {lesson.title}

        </h2>

        <p className="mt-6 text-slate-300 leading-8">

          {lesson.content}

        </p>

      </div>

      <div className="flex gap-4 mt-8">

        <button

          disabled={currentLesson === 0}

          onClick={() =>

            setCurrentLesson(currentLesson - 1)

          }

          className="bg-slate-700 px-6 py-3 rounded-lg disabled:opacity-40"

        >

          ← Anterior

        </button>

        {

          !ultimaLeccion ? (

            <button

              onClick={() =>

                setCurrentLesson(currentLesson + 1)

              }

              className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg"

            >

              Siguiente →

            </button>

          ) : (

            <button

              onClick={finalizarCurso}

              className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg"

            >

              🎉 Finalizar Curso

            </button>

          )

        }

      </div>

    </div>

  );

}

export default Course;