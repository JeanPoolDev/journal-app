import { Route, Routes } from "react-router";
import { AuthRouter } from "../auth/router/AuthRouter";
import { JournalRouter } from "../journal/router/JournalRouter";


export function AppRouter() {
  return (
    <Routes>

      {/* JournalRouter */}
      <Route path="/*" element={<JournalRouter />} />

      {/* AuthRoter */}
      <Route path="/auth/*" element={<AuthRouter />} />

    </Routes>
  );
};