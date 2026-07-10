import { Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Notification from "./components/Notification";

import Dashboard from "./pages/Dashboard";
import Cursos from "./pages/Cursos";
import Course from "./pages/Course";
import Laboratorio from "./pages/Laboratorio";
import Tutor from "./pages/Tutor";
import Logros from "./pages/Logros";
import Configuracion from "./pages/Configuracion";

function App() {

  return (

    <div className="flex min-h-screen bg-slate-900 text-white">

      <Notification/>

      <Sidebar/>

      <div className="flex-1 flex flex-col">

        <Header/>

        <main className="flex-1">

          <Routes>

            <Route path="/" element={<Dashboard/>}/>

            <Route path="/cursos" element={<Cursos/>}/>

            <Route path="/course/:id" element={<Course/>}/>

            <Route path="/laboratorio" element={<Laboratorio/>}/>

            <Route path="/tutor" element={<Tutor/>}/>

            <Route path="/logros" element={<Logros/>}/>

            <Route path="/configuracion" element={<Configuracion/>}/>

          </Routes>

        </main>

      </div>

    </div>

  );

}

export default App;