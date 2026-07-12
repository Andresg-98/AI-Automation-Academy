import { useState, useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import lessons from "../data/lessons";
import quizzes from "../data/quizzes";

import Quiz from "../components/Quiz";
import LessonRenderer from "../components/LessonRenderer";

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

  const [quizApproved, setQuizApproved] = useState(false);

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
        />

      </div>

      <p className="text-right text-sm text-slate-400 mt-2">

        {progress}% completado

      </p>

      <LessonRenderer lesson={lesson} />

      {ultimaLeccion && quizzes[id] && (

        <Quiz
          questions={quizzes[id]}
          onQuizCompleted={setQuizApproved}
        />

      )}

      <div className="flex gap-4 mt-8">

        <button
          disabled={currentLesson === 0}
          onClick={() => setCurrentLesson(currentLesson - 1)}
          className="bg-slate-700 px-6 py-3 rounded-lg disabled:opacity-40"
        >

          ← Anterior

        </button>

        {!ultimaLeccion ? (

          <button
            onClick={() => setCurrentLesson(currentLesson + 1)}
            className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg"
          >

            Siguiente →

          </button>

        ) : (

          <button
            disabled={!quizApproved}
            onClick={finalizarCurso}
            className={`px-6 py-3 rounded-lg transition-all ${
              quizApproved
                ? "bg-green-600 hover:bg-green-700"
                : "bg-slate-600 opacity-50 cursor-not-allowed"
            }`}
          >

            🎉 Finalizar Curso

          </button>

        )}

      </div>

    </div>

  );

}

export default Course;