function BadgeCard({

  badge,

  unlocked

}) {

  return (

    <div
      className={`rounded-xl p-6 border transition-all duration-300

      ${
        unlocked

          ? "bg-yellow-900 border-yellow-500"

          : "bg-slate-800 border-slate-700 opacity-50"
      }`}
    >

      <div className="text-5xl">

        {badge.icon}

      </div>

      <h2 className="text-xl font-bold mt-4">

        {badge.title}

      </h2>

      <p className="text-slate-300 mt-2">

        {badge.description}

      </p>

      <div className="mt-5">

        {

          unlocked

            ? (

              <span className="text-green-400 font-bold">

                ✅ Desbloqueada

              </span>

            )

            : (

              <span className="text-slate-400">

                🔒 Bloqueada

              </span>

            )

        }

      </div>

    </div>

  );

}

export default BadgeCard;