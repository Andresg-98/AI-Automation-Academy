import Course from "./pages/Course";
import { Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";

import Dashboard from "./pages/Dashboard";
import Cursos from "./pages/Cursos";
import Laboratorio from "./pages/Laboratorio";
import Tutor from "./pages/Tutor";
import Logros from "./pages/Logros";
import Configuracion from "./pages/Configuracion";

function App() {
  return (
    <div
      className="flex min-h-screen bg-slate-900 text-white"
    >
      <Sidebar />

      <div className="flex-1">

        <Routes>

          <Route path="/" element={<Dashboard />} />

          <Route
            path="/cursos"
            element={<Cursos />}
          />

          <Route
            path="/laboratorio"
            element={<Laboratorio />}
          />

          <Route
            path="/tutor"
            element={<Tutor />}
          />

          <Route
            path="/logros"
            element={<Logros />}
          />

          <Route
            path="/configuracion"
            element={<Configuracion />}
          />

          <Route 
            path="/course/:id" 
            element={<Course />} 
          />

        </Routes>

      </div>

    </div>
  );
}

export default App;