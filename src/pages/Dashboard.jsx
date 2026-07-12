import { useContext } from "react";

import { UserContext } from "../context/UserContext";

import DashboardHeader from "../components/dashboard/DashboardHeader";
import HeroCard from "../components/dashboard/HeroCard";
import StatsGrid from "../components/dashboard/StatsGrid";

import ContinueLearning from "../components/ContinueLearning";
import ProgressCard from "../components/ProgressCard";
import CourseCard from "../components/CourseCard";

import courses from "../data/courses";

function Dashboard() {

  const { user } = useContext(UserContext);

  return (

    <div className="p-10">

      <DashboardHeader name={user.name} />

      <HeroCard />

      <StatsGrid />

      <div className="mt-10">

        <ContinueLearning />

      </div>

      <div className="mt-10">

        <ProgressCard xp={user.xp} />

      </div>

      <h2 className="text-3xl font-bold mt-12 mb-6">

        Todos los cursos

      </h2>

      <div className="grid md:grid-cols-3 gap-6">

        {

          courses.map((course) => (

            <CourseCard

              key={course.id}

              id={course.id}

              title={course.title}

              progress={`${user.progress[course.id]}%`}

            />

          ))

        }

      </div>

    </div>

  );

}

export default Dashboard;