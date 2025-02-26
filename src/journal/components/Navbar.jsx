import { useDispatch } from "react-redux";
import { Exit } from "../../icons/iconos";
import { startLogut } from "../../store/thunks";


export function Navbar({ widthSpace = '240' }) {

  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(startLogut());
  }

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

        <button
          onClick={onLogout}
          className="hover:opacity-70 cursor-pointer ease-in-out"
        >
          <Exit />
        </button>
      </div>
    </header>
  );
};