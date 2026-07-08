import ProgressCard from "../components/ProgressCard";
import CourseCard from "../components/CourseCard";

function Dashboard() {
  return (
    <div className="flex-1 p-10">
      <h1 className="text-4xl font-bold text-white">
        Bienvenido Andrés 👋
      </h1>

  <div className="mt-8">
    <ProgressCard />
</div>

      <p className="text-slate-400 mt-2">
        Continúa aprendiendo Inteligencia Artificial y Automatización.
      </p>

      <div className="grid md:grid-cols-3 gap-6 mt-10">
        <CourseCard
          title="React desde cero"
          progress="10%"
        />

        <CourseCard
          title="JavaScript Moderno"
          progress="0%"
        />

        <CourseCard
          title="Automatización con n8n"
          progress="0%"
        />
      </div>
    </div>
  );
}

export default Dashboard;