import { useContext } from "react";

import { UserContext } from "../context/UserContext";

import ProfileCard from "../components/ProfileCard";
import ContinueLearning from "../components/ContinueLearning";
import CourseCard from "../components/CourseCard";
import ProgressCard from "../components/ProgressCard";

import courses from "../data/courses";

function Dashboard() {

  const { user } = useContext(UserContext);

  return (

    <div className="p-10">

      <h1 className="text-4xl font-bold">

        Bienvenido {user.name} 👋

      </h1>

      <p className="text-slate-400 mt-2">

        Sigue aprendiendo IA y Automatización.

      </p>

      <div className="mt-10">

        <ProfileCard />

      </div>

      <div className="mt-10">

        <ContinueLearning />

      </div>

      <div className="mt-10">

        <ProgressCard xp={user.xp} />

      </div>

      <h2 className="text-2xl font-bold mt-10 mb-6">

        Todos los cursos

      </h2>

      <div className="grid md:grid-cols-3 gap-6">

        {courses.map((course) => (

          <CourseCard

            key={course.id}

            id={course.id}

            title={course.title}

            progress={`${user.progress[course.id]}%`}

          />

        ))}

      </div>

    </div>

  );

}

export default Dashboard;