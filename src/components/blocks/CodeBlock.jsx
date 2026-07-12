function CodeBlock({ language, content }) {

  return (

    <div className="bg-slate-950 border border-slate-700 rounded-xl overflow-hidden mb-6">

      <div className="bg-slate-800 px-4 py-2 border-b border-slate-700">

        <span className="text-green-400 text-sm font-semibold uppercase">

          {language}

        </span>

      </div>

      <pre className="p-5 overflow-x-auto">

        <code className="text-green-300 whitespace-pre-wrap">

          {content}

        </code>

      </pre>

    </div>

  );

}

export default CodeBlock;