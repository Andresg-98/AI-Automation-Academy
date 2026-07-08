function CourseCard({ title, progress }) {
  return (
    <div className="bg-slate-800 rounded-xl p-6 shadow-lg border border-slate-700 hover:border-blue-500 transition-all duration-300">
      <h2 className="text-xl font-bold text-white">
        {title}
      </h2>

      <p className="text-slate-400 mt-2">
        Progreso: {progress}
      </p>

      <div className="w-full bg-slate-700 rounded-full h-2 mt-4">
        <div
          className="bg-blue-500 h-2 rounded-full"
          style={{ width: progress }}
        ></div>
      </div>

      <button className="mt-6 bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-lg text-white font-medium transition-colors">
        Continuar
      </button>
    </div>
  );
}

export default CourseCard;