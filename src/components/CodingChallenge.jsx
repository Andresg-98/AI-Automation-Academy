import { useState, useMemo } from "react";

import Editor from "@monaco-editor/react";

import FeedbackCard from "./FeedbackCard";

import {
  evaluateChallenge
} from "../services/logic/challengeEvaluator";

function CodingChallenge({ challenge }) {

  const [showHint, setShowHint] = useState(false);
  const [showSolution, setShowSolution] = useState(false);
  const [code, setCode] = useState("");
  const [result, setResult] = useState(null);

  if (!challenge) return null;

  const language = useMemo(() => {

    const solution = challenge.solution || "";

    if (
      solution.includes("function") ||
      solution.includes("const ") ||
      solution.includes("export default")
    ) {

      return "javascript";

    }

    if (
      solution.includes("print(") ||
      solution.includes("def ")
    ) {

      return "python";

    }

    return "plaintext";

  }, [challenge]);

  function copiarCodigo() {

    navigator.clipboard.writeText(code);

  }

  function restaurarEditor() {

    setCode("");
    setResult(null);

  }

  function revisarCodigo() {

    const evaluation = evaluateChallenge(
      challenge,
      code
    );

    setResult(evaluation);

  }

  return (

    <div className="bg-slate-800 rounded-2xl p-8 mt-10 border border-slate-700">

      <h2 className="text-2xl font-bold">

        💻 Desafío práctico

      </h2>

      <h3 className="text-xl mt-4">

        {challenge.title}

      </h3>

      <p className="mt-4 text-slate-300">

        {challenge.description}

      </p>

      <div className="flex justify-between items-center mt-6 mb-3 flex-wrap gap-3">

        <span className="text-sm text-slate-400">

          Lenguaje: <strong>{language}</strong>

        </span>

        <div className="flex gap-3 flex-wrap">

          <button

            onClick={copiarCodigo}

            className="bg-slate-700 hover:bg-slate-600 px-4 py-2 rounded-lg"

          >

            📋 Copiar

          </button>

          <button

            onClick={restaurarEditor}

            className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg"

          >

            🔄 Limpiar

          </button>

          <button

            onClick={revisarCodigo}

            className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg"

          >

            🤖 Revisar mi código

          </button>

        </div>

      </div>

      <div className="overflow-hidden rounded-xl border border-slate-700">

        <Editor

          height="350px"

          language={language}

          value={code}

          onChange={(value) => setCode(value || "")}

          theme="vs-dark"

          options={{

            fontSize: 15,

            minimap: {

              enabled: false

            },

            automaticLayout: true,

            wordWrap: "on",

            scrollBeyondLastLine: false,

            roundedSelection: true,

            padding: {

              top: 16,

              bottom: 16

            }

          }}

        />

      </div>

      <FeedbackCard result={result} />

      <div className="flex gap-4 mt-6 flex-wrap">

        <button

          onClick={() => setShowHint(!showHint)}

          className="bg-yellow-600 hover:bg-yellow-700 px-5 py-3 rounded-xl"

        >

          💡 Pista

        </button>

        <button

          onClick={() => setShowSolution(!showSolution)}

          className="bg-blue-600 hover:bg-blue-700 px-5 py-3 rounded-xl"

        >

          👀 Ver solución

        </button>

      </div>

      {showHint && (

        <div className="bg-yellow-900/30 border border-yellow-700 rounded-xl p-4 mt-6">

          {challenge.hint}

        </div>

      )}

      {showSolution && (

        <div className="mt-6">

          <h3 className="font-bold mb-3">

            ✅ Solución

          </h3>

          <div className="overflow-hidden rounded-xl border border-slate-700">

            <Editor

              height="250px"

              language={language}

              value={challenge.solution}

              theme="vs-dark"

              options={{

                readOnly: true,

                minimap: {

                  enabled: false

                },

                fontSize: 15,

                scrollBeyondLastLine: false

              }}

            />

          </div>

        </div>

      )}

    </div>

  );

}

export default CodingChallenge;