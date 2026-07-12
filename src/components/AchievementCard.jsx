function AchievementCard({

  title,

  description,

  unlocked

}) {

  return (

    <div

      className={`rounded-xl p-6 border transition-all

      ${

        unlocked

          ? "bg-green-900 border-green-500"

          : "bg-slate-800 border-slate-700 opacity-60"

      }`}

    >

      <h2 className="text-xl font-bold">

        {title}

      </h2>

      <p className="mt-2 text-slate-300">

        {description}

      </p>

      <p className="mt-5 font-bold">

        {

          unlocked

            ? "✅ Desbloqueado"

            : "🔒 Bloqueado"

        }

      </p>

    </div>

  );

}

export default AchievementCard;