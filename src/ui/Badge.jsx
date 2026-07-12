function Badge({

  children,

  color = "blue"

}) {

  const colors = {

    blue:

      "bg-blue-600",

    green:

      "bg-green-600",

    red:

      "bg-red-600",

    yellow:

      "bg-yellow-500 text-black",

    purple:

      "bg-purple-600"

  };

  return (

    <span

      className={`

        px-3

        py-1

        rounded-full

        text-sm

        font-semibold

        ${colors[color]}

      `}

    >

      {children}

    </span>

  );

}

export default Badge;