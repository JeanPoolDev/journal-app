import { useDispatch, useSelector } from "react-redux";
import { Add } from "../../icons/iconos";
import { NothingSelected, NoteView } from "../components/";
import { JournalLayout } from "../layout/JournalLayout";
import { startNewNote } from "../../store/journal/thunks";

export function JournalPage() {

  const { active } = useSelector((state) => state.journal);
  const dispatch = useDispatch();

  const onNewNote = () => {
    dispatch(startNewNote());
  }

  return (
    <JournalLayout>

      {
        active
          ? <NoteView />
          : <NothingSelected />
      }

      <div className="fixed right-10 bottom-10">
        <button
          onClick={onNewNote}
          className="p-4 rounded-full bg-green-700 cursor-pointer hover:opacity-70">
          <Add />
        </button>
      </div>

    </JournalLayout>
  );
}