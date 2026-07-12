import { colors } from "../theme";

function Button({

  children,

  onClick,

  type = "button",

  variant = "primary",

  disabled = false,

  className = ""

}) {

  const style = colors[variant] || colors.primary;

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

        ${style.background}

        ${style.hover}

        ${style.text}

        ${style.border || ""}

        ${className}

      `}

    >

      {children}

    </button>

  );

}

export default Button;