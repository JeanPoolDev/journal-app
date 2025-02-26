import { useDispatch } from "react-redux";
import { BookMark } from "../../icons/iconos";
import { setActiveNote } from "../../store/journal/SliceJournal";

export function SidebarItem({ id, title, body, date, imageUrls }) {

  const dispatch = useDispatch();

  const newTitlte = () => {
    return title.length > 17
      ? title.slice(0, 17) + '...'
      : title
  }

  const onActiveNote = () => {
    dispatch(setActiveNote({ id, title, body, date, imageUrls }))
  }

  return (
    <button
      onClick={onActiveNote}
      key={id}
      className="flex w-full p-4 bg-gray-200 
              items-center cursor-pointer mb-2 rounded-lg
              hover:opacity-50 transition-all">
      <div className="w-1/6 ">
        <BookMark />
      </div>
      <div className="w-5/6 flex">
        <h2 className="font-semibold text-lg">
          {newTitlte()}
        </h2>
      </div>
    </button>
  );
};