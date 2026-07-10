import { useContext } from "react";

import { UserContext } from "../context/UserContext";

import logros from "../data/logros";
import LogroCard from "../components/LogroCard";

function Logros() {
  const { user } = useContext(UserContext);

  const cursosCompletados = user.completedCourses.length;

  return (
    <div className="flex-1 p-10">
      <h1 className="text-4xl font-bold">
        🏆 Logros
      </h1>

      <p className="mt-4 text-slate-400">
        Desbloquea recompensas mientras avanzas en la academia.
      </p>

      <div className="grid md:grid-cols-2 gap-6 mt-8">
        {logros.map((logro) => (
          <LogroCard
            key={logro.id}
            title={logro.title}
            description={logro.description}
            unlocked={cursosCompletados >= logro.requirement}
          />
        ))}
      </div>
    </div>
  );
}

export default Logros;