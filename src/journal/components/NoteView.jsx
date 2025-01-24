import { Guardar } from "../../icons/iconos";
import { Gallery } from "./Gallery";


export function NoteView() {
  return (
    <section className="w-full space-y-4">
      <div className="flex justify-between items-center">

        <p className="text-4xl font-extralight">
          28 de Agosto, 2023
        </p>

        <a
          href=""
          className="flex gap-4 items-center hover:bg-gray-200 p-3"
        >
          <p className="font-semibold text-lg">Guardar</p>
          <Guardar />
        </a>

      </div>

      <form className="flex w-full flex-col space-y-2">
        <input
          type="text"
          className="bg-gray-200 flex-1 p-4 
          border-b-2 
          border-gray-300 focus:outline-none focus:border-black 
          transition duration-300"
          placeholder="Titulo"
        />

        <textarea
          type="text"
          className="bg-gray-200 flex-1 p-4 
          border-b-2 
          border-gray-300 focus:outline-none focus:border-black 
          transition duration-300"
          placeholder="¿Qué sucedío el día de hoy?"
          rows={4}
        />
      </form>

      {/* Galería de imagenes */}
      <Gallery />


    </section>
  );
};