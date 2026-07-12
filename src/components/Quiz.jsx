import { useState, useEffect } from "react";

function Quiz({ questions, onQuizCompleted }) {

  const [current, setCurrent] = useState(0);

  const [score, setScore] = useState(0);

  const [finished, setFinished] = useState(false);

  function answer(option) {

    let newScore = score;

    if (option === questions[current].answer) {

      newScore++;

      setScore(newScore);

    }

    if (current + 1 < questions.length) {

      setCurrent(current + 1);

    } else {

      setFinished(true);

    }

  }

  useEffect(() => {

    if (!finished) return;

    const approved = score >= Math.ceil(questions.length * 0.7);

    if (onQuizCompleted) {

      onQuizCompleted(approved);

    }

  }, [finished]);

  if (finished) {

    const approved = score >= Math.ceil(questions.length * 0.7);

    return (

      <div className="bg-slate-800 rounded-xl p-8 mt-10">

        <h2 className="text-2xl font-bold">

          🎉 Quiz finalizado

        </h2>

        <p className="mt-4">

          Resultado: {score}/{questions.length}

        </p>

        <p
          className={`mt-4 font-bold ${
            approved
              ? "text-green-400"
              : "text-red-400"
          }`}
        >
          {approved
            ? "✅ ¡Aprobaste el Quiz!"
            : "❌ Debes volver a intentarlo."}
        </p>

      </div>

    );

  }

  return (

    <div className="bg-slate-800 rounded-xl p-8 mt-10">

      <h2 className="text-2xl font-bold">

        {questions[current].question}

      </h2>

      <div className="flex flex-col gap-4 mt-8">

        {questions[current].options.map(

          (option, index) => (

            <button

              key={index}

              onClick={() => answer(index)}

              className="bg-slate-700 hover:bg-blue-600 rounded-lg p-4 text-left"

            >
              {option}
            </button>

          )

        )}

      </div>

    </div>

  );

}

export default Quiz;