import { Routes, Route } from "react-router-dom";

import { AppLayout } from "./layouts";

import Dashboard from "./pages/Dashboard";
import Cursos from "./pages/Cursos";
import Course from "./pages/Course";
import Laboratorio from "./pages/Laboratorio";
import Tutor from "./pages/Tutor";
import Logros from "./pages/Logros";
import Certificados from "./pages/Certificados";
import CertificateView from "./pages/CertificateView";
import Configuracion from "./pages/Configuracion";

function App() {

  return (

    <AppLayout>

      <Routes>

        <Route
          path="/"
          element={<Dashboard />}
        />

        <Route
          path="/cursos"
          element={<Cursos />}
        />

        <Route
          path="/course/:id"
          element={<Course />}
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
          path="/certificados"
          element={<Certificados />}
        />

        <Route
          path="/certificado/:id"
          element={<CertificateView />}
        />

        <Route
          path="/configuracion"
          element={<Configuracion />}
        />

      </Routes>

    </AppLayout>

  );

}

export default App;