import { useDispatch, useSelector } from "react-redux";
import { Guardar, Images } from "../../icons/iconos";
import { Gallery } from "./Gallery";
import { useForm } from "../../hooks/useForm";
import { startDeleveNote, startUpdateNote, startUploadImages } from "../../store/journal/thunks";
import { useEffect, useRef } from "react";
import { setActiveNote } from "../../store/journal/SliceJournal";


export function NoteView() {

  const inputFilesRef = useRef();
  const dispatch = useDispatch();
  const { active: note, isSaving } = useSelector((state => state.journal))
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

  const onSaveImges = ({ target }) => {
    if (target.files === 0) return;
    dispatch(startUploadImages(target.files))
  }

  const onDeleteNote = () => {
    dispatch(startDeleveNote(note.id))
  }

  return (
    <section className="w-full space-y-4">
      <div className="flex justify-between items-center">

        <p className="text-4xl font-extralight">
          {newFecha()}
        </p>

        <div className="flex gap-4">

          <input
            ref={inputFilesRef}
            className="hidden"
            type="file"
            multiple
            onChange={onSaveImges}
          />

          <button
            onClick={() => inputFilesRef.current.click()}
            disabled={isSaving}
            className="flex gap-2 items-center hover:bg-gray-200 p-3 cursor-pointer"
          >
            <p className="font-semibold text-lg">
              Subir Imagenes
            </p>
            <Images />
          </button>

          <button
            onClick={onSave}
            className="flex gap-2 items-center hover:bg-gray-200 p-3 cursor-pointer"
          >
            <p className="font-semibold text-lg">
              Guardar
            </p>
            <Guardar />
          </button>
        </div>

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

      <button
        onClick={onDeleteNote}
        className="flex gap-2 items-center border 
        hover:bg-gray-200 p-3 cursor-pointer"
      >
        Eliminar
      </button>

      {/* Galería de imagenes */}
      <Gallery images={note.imageUrls} />


    </section>
  );
};