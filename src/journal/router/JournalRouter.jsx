import { Navigate, Route, Routes } from "react-router";
import { JournalPage } from "../pages/JournalPage";


export function JournalRouter() {
  return (
    <Routes>

      {/* JournalPage */}
      <Route path="/" element={<JournalPage />} />

      {/* Ruta Alternativa */}
      <Route path="/*" element={<Navigate to={'/'} />} />

    </Routes>
  );
};