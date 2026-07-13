import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

function AppLayout({ children }) {

  return (

    <div className="flex min-h-screen bg-slate-900 text-white">

      <Sidebar />

      <div className="flex-1 flex flex-col">

        <Topbar />

        <main className="flex-1 overflow-auto">

          {children}

        </main>

      </div>

    </div>

  );

}

export default AppLayout;