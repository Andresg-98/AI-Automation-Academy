function StatCard({ icon, title, value, color }) {

  return (

    <div className="bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-700 hover:border-blue-500 transition-all duration-300">

      <div
        className="w-14 h-14 rounded-xl flex items-center justify-center text-3xl mb-5"
        style={{ backgroundColor: color }}
      >
        {icon}
      </div>

      <p className="text-slate-400 text-sm">

        {title}

      </p>

      <h2 className="text-3xl font-bold mt-2">

        {value}

      </h2>

    </div>

  );

}

export default StatCard;