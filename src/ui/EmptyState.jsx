function EmptyState({

  icon = "📭",

  title,

  description,

  action

}) {

  return (

    <div className="bg-slate-800 rounded-2xl border border-slate-700 p-10 text-center">

      <div className="text-6xl">

        {icon}

      </div>

      <h2 className="text-3xl font-bold mt-6">

        {title}

      </h2>

      <p className="text-slate-400 mt-4 max-w-xl mx-auto">

        {description}

      </p>

      {

        action && (

          <div className="mt-8">

            {action}

          </div>

        )

      }

    </div>

  );

}

export default EmptyState;