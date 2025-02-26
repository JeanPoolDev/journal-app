import { Navbar } from "../components/Navbar";
import { Sidebar } from "../components/Sidebar";

const widthSpace = 300;

export function JournalLayout({ children }) {
  return (
    <section className="w-full h-screen flex">

      {/* Sidebar */}
      <Sidebar widthSpace={widthSpace} />

      {/* NavBar */}
      <Navbar widthSpace={widthSpace} />

      <div className="p-4 bg-gray-50
        mt-[70px] h-[calc(100vh-70px)] overflow-y-auto"
        style={{ width: `calc(100% - ${widthSpace}px)` }}>
        {children}
      </div>

    </section>
  );
};