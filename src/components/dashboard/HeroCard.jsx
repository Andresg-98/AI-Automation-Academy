import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

function HeroCard() {
  const { user } = useContext(UserContext);

  const xpPorNivel = 300;

  const nivel = Math.floor(user.xp / xpPorNivel) + 1;

  const xpActual = user.xp % xpPorNivel;

  const porcentaje = (xpActual / xpPorNivel) * 100;

  return (
    <div className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-3xl p-8 shadow-xl">

      <div className="flex justify-between items-start flex-wrap gap-8">

        <div>

          <p className="text-blue-100 uppercase tracking-widest text-sm">

            AI Academy

          </p>

          <h2 className="text-4xl font-bold mt-2">

            Nivel {nivel}

          </h2>

          <p className="mt-3 text-blue-100">

            Estás avanzando muy bien. Continúa aprendiendo para desbloquear
            nuevos logros.

          </p>

        </div>

        <div className="text-right">

          <p className="text-blue-100">

            XP Actual

          </p>

          <h2 className="text-5xl font-bold">

            {user.xp}

          </h2>

        </div>

      </div>

      <div className="mt-8">

        <div className="flex justify-between mb-2">

          <span>

            Progreso del nivel

          </span>

          <span>

            {xpActual}/{xpPorNivel} XP

          </span>

        </div>

        <div className="w-full bg-blue-400/30 rounded-full h-4">

          <div
            className="bg-white h-4 rounded-full transition-all duration-700"
            style={{ width: `${porcentaje}%` }}
          />

        </div>

      </div>

    </div>
  );
}

export default HeroCard;