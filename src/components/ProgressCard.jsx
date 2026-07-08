function ProgressCard({ xp }) {

  const porcentaje = (xp / 300) * 100;

  return (
    <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 shadow-lg">

      <h2 className="text-2xl font-bold">
        Tu progreso
      </h2>

      <p className="text-slate-400 mt-2">
        Nivel 2
      </p>

      <div className="w-full bg-slate-700 rounded-full h-3 mt-4">

        <div
          className="bg-green-500 h-3 rounded-full transition-all duration-500"
          style={{
            width: `${porcentaje}%`,
          }}
        ></div>

      </div>

      <p className="mt-3 text-slate-300">

        {xp} / 300 XP

      </p>

      <p className="mt-2 text-orange-400">

        🔥 Racha: 3 días

      </p>

    </div>
  );
}

export default ProgressCard;