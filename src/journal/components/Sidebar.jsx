import { useSelector } from "react-redux";
import { SidebarItem } from "./SidebarItem";

export function Sidebar({ widthSpace }) {

  const { notes } = useSelector((state) => state.journal);
  const { displayName: name } = useSelector((state) => state.auth);

  return (
    <nav
      className="bg-gray-50 shadow-lg p-4 h-full overflow-y-scroll"
      style={{ width: `${widthSpace}px` }}
    >
      <div className="text-2xl border-b mb-2 nombre font-bold">
        <h1 className="mb-3">
          {name}
        </h1>
      </div>

      {
        notes.map(note => (
          <SidebarItem key={note.id} {...note} />
        ))
      }

    </nav>
  );
};