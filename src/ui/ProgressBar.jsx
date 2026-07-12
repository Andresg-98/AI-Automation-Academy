function ProgressBar({

  value = 0,

  height = "h-3",

  color = "bg-blue-500",

  showLabel = false,

  className = ""

}) {

  const progress = Math.min(

    Math.max(value, 0),

    100

  );

  return (

    <div className={className}>

      <div

        className={`

          w-full

          bg-slate-700

          rounded-full

          overflow-hidden

          ${height}

        `}

      >

        <div

          className={`

            ${color}

            ${height}

            rounded-full

            transition-all

            duration-500

          `}

          style={{

            width: `${progress}%`

          }}

        />

      </div>

      {

        showLabel && (

          <p className="text-right text-sm text-slate-400 mt-2">

            {progress}%

          </p>

        )

      }

    </div>

  );

}

export default ProgressBar;