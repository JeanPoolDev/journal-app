import { BookMark } from "../../icons/iconos";

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']

export function Sidebar({ widthSpace }) {
  return (
    <nav
      className="bg-gray-50 shadow-lg p-4 h-full overflow-y-scroll"
      style={{ width: `${widthSpace}px` }}
    >
      <div className="text-3xl border-b mb-2">
        <h1 className="mb-3">
          Jean Pool
        </h1>
      </div>

      {
        meses.map(text => (
          <a
            href=''
            key={text}
            className="flex w-full p-4 bg-gray-200 
              items-center justify-center cursor-pointer mb-2 rounded-lg">
            <div className="w-2/6">
              <BookMark />
            </div>
            <div className="w-4/6">
              <h2>{text}</h2>
              <p className="text-base">Aute excepteur labore sit irure</p>
            </div>
          </a>
        ))
      }



    </nav>
  );
};