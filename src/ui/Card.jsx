function Card({

  children,

  className = ""

}) {

  return (

    <div

      className={`

        bg-slate-800

        rounded-2xl

        border

        border-slate-700

        shadow-lg

        p-8

        ${className}

      `}

    >

      {children}

    </div>

  );

}

export default Card;