function Button({

  children,

  onClick,

  type = "button",

  variant = "primary",

  disabled = false,

  className = ""

}) {

  const variants = {

    primary:

      "bg-blue-600 hover:bg-blue-700 text-white",

    success:

      "bg-green-600 hover:bg-green-700 text-white",

    danger:

      "bg-red-600 hover:bg-red-700 text-white",

    secondary:

      "bg-slate-700 hover:bg-slate-600 text-white",

    outline:

      "border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white"

  };

  return (

    <button

      type={type}

      onClick={onClick}

      disabled={disabled}

      className={`

        px-6

        py-3

        rounded-xl

        font-semibold

        transition-all

        duration-300

        disabled:opacity-50

        disabled:cursor-not-allowed

        ${variants[variant]}

        ${className}

      `}

    >

      {children}

    </button>

  );

}

export default Button;