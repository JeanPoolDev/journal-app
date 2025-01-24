import { Guardar } from "../../icons/iconos";
import { NothingSelected, NoteView } from "../components/";
import { JournalLayout } from "../layout/JournalLayout";

export function JournalPage() {
  return (
    <JournalLayout>

      {/* NothingSeleted */}
      {/* <NothingSelected /> */}

      {/* NoteView */}
      <NoteView />

      <div className="fixed right-10 bottom-10">
        <button className="p-4 rounded-full bg-green-700">
          <Guardar />
        </button>
      </div>

    </JournalLayout>
  );
}