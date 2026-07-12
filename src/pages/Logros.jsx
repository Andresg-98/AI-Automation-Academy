import { useContext } from "react";

import { UserContext } from "../context/UserContext";

import logros from "../data/logros";
import badges from "../data/badges";

import AchievementCard from "../components/AchievementCard";
import BadgeCard from "../components/BadgeCard";

function Logros() {

  const { user } = useContext(UserContext);

  const completed = user.completedCourses.length;

  return (

    <div className="p-10">

      <h1 className="text-4xl font-bold">

        🏆 Logros e Insignias

      </h1>

      <p className="text-slate-400 mt-2">

        Tu progreso dentro de AI Academy.

      </p>

      <h2 className="text-2xl font-bold mt-10 mb-5">

        Logros

      </h2>

      <div className="grid md:grid-cols-2 gap-6">

        {

          logros.map((logro) => (

            <AchievementCard

              key={logro.id}

              title={logro.title}

              description={logro.description}

              unlocked={

                completed >= logro.requirement

              }

            />

          ))

        }

      </div>

      <h2 className="text-2xl font-bold mt-12 mb-5">

        Insignias

      </h2>

      <div className="grid md:grid-cols-3 gap-6">

        {

          badges.map((badge) => (

            <BadgeCard

              key={badge.id}

              badge={badge}

              unlocked={

                completed >= badge.requirement

              }

            />

          ))

        }

      </div>

    </div>

  );

}

export default Logros;