function LogroCard({ title, description, unlocked }) {
  return (
    <div
      className={`rounded-xl p-6 border transition-all duration-300 ${
        unlocked
          ? "bg-green-900 border-green-500"
          : "bg-slate-800 border-slate-700"
      }`}
    >
      <h2 className="text-2xl font-bold">
        {title}
      </h2>

      <p className="text-slate-300 mt-3">
        {description}
      </p>

      <div className="mt-6">
        {unlocked ? (
          <span className="text-green-300 font-semibold">
            ✅ Desbloqueado
          </span>
        ) : (
          <span className="text-gray-400 font-semibold">
            🔒 Bloqueado
          </span>
        )}
      </div>
    </div>
  );
}

export default LogroCard;