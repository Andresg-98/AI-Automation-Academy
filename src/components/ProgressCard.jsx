function ProgressCard({ xp }) {

  const xpPorNivel = 300;

  const nivel = Math.floor(xp / xpPorNivel) + 1;

  const xpActual = xp % xpPorNivel;

  const porcentaje = (xpActual / xpPorNivel) * 100;

  return (

    <div className="bg-slate-800 rounded-xl p-7">

      <h2 className="text-3xl font-bold">

        Tu progreso

      </h2>

      <p className="text-slate-400 mt-3">

        Nivel {nivel}

      </p>

      <div className="w-full h-5 bg-slate-700 rounded-full mt-5 overflow-hidden">

        <div
          className="bg-green-500 h-5 rounded-full transition-all duration-500"
          style={{
            width: `${porcentaje}%`,
          }}
        />

      </div>

      <p className="mt-4 text-2xl">

        {xpActual} / {xpPorNivel} XP

      </p>

      <p className="text-orange-400 mt-3">

        🔥 Racha: 3 días

      </p>

    </div>

  );

}

export default ProgressCard;