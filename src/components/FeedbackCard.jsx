function FeedbackCard({ result }) {

  if (!result) return null;

  return (

    <div
      className={`rounded-xl p-6 mt-8 border ${
        result.success
          ? "bg-green-900/30 border-green-600"
          : "bg-slate-900 border-slate-700"
      }`}
    >

      <h3 className="text-xl font-bold">

        Resultado

      </h3>

      <p className="mt-4">

        {result.message}

      </p>

      <div className="mt-5">

        <div className="flex justify-between mb-2">

          <span>Puntuación</span>

          <span>{result.score}%</span>

        </div>

        <div className="w-full bg-slate-700 rounded-full h-3">

          <div

            className={`h-3 rounded-full transition-all duration-700 ${
              result.success
                ? "bg-green-500"
                : "bg-yellow-500"
            }`}

            style={{

              width: `${result.score}%`

            }}

          />

        </div>

      </div>

    </div>

  );

}

export default FeedbackCard;