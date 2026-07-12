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

    return null;

  }

  return (

    <div className="bg-slate-800 rounded-xl p-6 mb-10">

      <h2 className="text-2xl font-bold">

        ▶ Continúa aprendiendo

      </h2>

      <p className="text-slate-400 mt-2">

        {courseInProgress.title}

      </p>

      <button

        onClick={() =>

          navigate(`/course/${courseInProgress.id}`)

        }

        className="bg-blue-600 hover:bg-blue-700 px-5 py-3 rounded-lg mt-5"

      >

        Continuar curso

      </button>

    </div>

  );

}

export default ContinueLearning;