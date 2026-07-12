import { useContext } from "react";

import { UserContext } from "../../context/UserContext";

import StatCard from "./StatCard";

function StatsGrid() {

  const { user } = useContext(UserContext);

  const nivel = Math.floor(user.xp / 300) + 1;

  return (

    <div className="grid md:grid-cols-4 gap-6 mt-10">

      <StatCard

        icon="⭐"

        title="Nivel"

        value={nivel}

        color="#2563eb"

      />

      <StatCard

        icon="💎"

        title="XP"

        value={user.xp}

        color="#059669"

      />

      <StatCard

        icon="🔥"

        title="Racha"

        value={`${user.streak} días`}

        color="#ea580c"

      />

      <StatCard

        icon="📚"

        title="Cursos"

        value={user.completedCourses.length}

        color="#7c3aed"

      />

    </div>

  );

}

export default StatsGrid;