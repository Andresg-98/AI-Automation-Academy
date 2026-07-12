function ResourceCard({ resource }) {

  return (

    <div className="bg-slate-800 border border-slate-700 rounded-xl p-5">

      <div className="flex justify-between items-center">

        <div>

          <h3 className="text-lg font-bold">

            {resource.title}

          </h3>

          <p className="text-slate-400 mt-2">

            {resource.description}

          </p>

        </div>

        <span className="bg-blue-600 px-3 py-1 rounded-lg text-sm">

          {resource.type}

        </span>

      </div>

      <button
        className="mt-5 bg-green-600 hover:bg-green-700 px-5 py-2 rounded-lg transition-all"
      >

        ⬇ Descargar

      </button>

    </div>

  );

}

export default ResourceCard;