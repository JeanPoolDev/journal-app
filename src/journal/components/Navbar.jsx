import { Exit } from "../../icons/iconos";


export function Navbar({ widthSpace = '240' }) {
  return (
    <header
      className="fixed py-4 px-6 bg-green-950"
      style={{
        width: `calc(100% - ${widthSpace}px)`,
        marginLeft: `${widthSpace}px`
      }}
    >
      <div className="flex justify-between items-center">
        <p className="text-white font-semibold text-xl">
          Journal App
        </p>

        <Exit />
      </div>
    </header>
  );
};