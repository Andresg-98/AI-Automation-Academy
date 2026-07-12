function DashboardHeader({ name }) {
  const hora = new Date().getHours();

  let saludo = "Buenas noches";

  if (hora >= 5 && hora < 12) {
    saludo = "Buenos días";
  } else if (hora >= 12 && hora < 19) {
    saludo = "Buenas tardes";
  }

  return (
    <div className="mb-10">
      <h1 className="text-5xl font-bold">
        {saludo}, {name} 👋
      </h1>

      <p className="text-slate-400 text-lg mt-3">
        Sigue construyendo tu futuro aprendiendo Inteligencia Artificial,
        Automatización y Desarrollo de Software.
      </p>
    </div>
  );
}

export default DashboardHeader;