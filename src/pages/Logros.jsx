import { useContext } from "react";

import { UserContext } from "../context/UserContext";

import logros from "../data/logros";

import AchievementCard from "../components/AchievementCard";

function Logros() {

  const { user } = useContext(UserContext);

  return (

    <div className="p-10">

      <h1 className="text-4xl font-bold">

        🏆 Logros

      </h1>

      <p className="text-slate-400 mt-2">

        Desbloquea recompensas completando cursos.

      </p>

      <div className="grid md:grid-cols-2 gap-6 mt-10">

        {

          logros.map((logro) => {

            const unlocked =

              user.completedCourses.length >=

              logro.requirement;

            return (

              <AchievementCard

                key={logro.id}

                title={logro.title}

                description={logro.description}

                unlocked={unlocked}

              />

            );

          })

        }

      </div>

    </div>

  );

}

export default Logros;