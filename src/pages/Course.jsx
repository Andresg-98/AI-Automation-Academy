import { useState, useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import lessons from "../data/lessons";
import courses from "../data/courses";

import { UserContext } from "../context/UserContext";

function Course() {

  const { id } = useParams();

  const navigate = useNavigate();

  const {

    user,

    updateCurrentLesson,

    completeCourse

  } = useContext(UserContext);

  const course = courses.find(
    (course) => course.id === id
  );

  const courseLessons = lessons[id] || [];

  const [currentLesson, setCurrentLesson] =

    useState(user.currentLesson[id] || 0);

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

  const ultimaLeccion =
    currentLesson === courseLessons.length - 1;

  function finalizarCurso() {

    completeCourse(id);

    alert("🎉 ¡Curso completado! +100 XP");

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

          disabled={currentLesson===0}

          onClick={()=>

            setCurrentLesson(currentLesson-1)

          }

          className="bg-slate-700 px-6 py-3 rounded-lg disabled:opacity-40"

        >

          ← Anterior

        </button>

        {!ultimaLeccion ? (

          <button

            onClick={()=>

              setCurrentLesson(currentLesson+1)

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

        )}

      </div>

    </div>

  );

}

export default Course;