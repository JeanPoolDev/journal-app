import { useDispatch, useSelector } from "react-redux";
import { Guardar } from "../../icons/iconos";
import { Gallery } from "./Gallery";
import { useForm } from "../../hooks/useForm";
import { startUpdateNote } from "../../store/journal/thunks";
import { useEffect } from "react";
import { setActiveNote } from "../../store/journal/SliceJournal";


export function NoteView() {

  const dispatch = useDispatch();
  const { active: note } = useSelector((state => state.journal))
  const { date, title, body, onInputChange, formState } = useForm(note);

  useEffect(() => {
    dispatch(setActiveNote(formState))
  }, [formState, dispatch])


  const newFecha = () => {

    const newDate = new Date(date);

    return Intl.DateTimeFormat('es-ES', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(newDate);

  }

  const onSave = () => {
    dispatch(startUpdateNote())
  }

  return (
    <section className="w-full space-y-4">
      <div className="flex justify-between items-center">

        <p className="text-4xl font-extralight">
          {newFecha()}
        </p>

        <button
          onClick={onSave}
          className="flex gap-4 items-center hover:bg-gray-200 p-3 cursor-pointer"
        >
          <p className="font-semibold text-lg">
            Guardar
          </p>
          <Guardar />
        </button>

      </div>

      <form className="flex w-full flex-col space-y-2">
        <input
          value={title}
          onChange={onInputChange}
          name="title"
          type="text"
          className="bg-gray-200 flex-1 p-4 
          border-b-2 
          border-gray-300 focus:outline-none focus:border-black 
          transition duration-300 font-bold"
          placeholder="Titulo"
        />

        <textarea
          value={body}
          onChange={onInputChange}
          name="body"
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