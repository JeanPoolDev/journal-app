import { Navigate, Route, Routes } from "react-router";
import { LoginPage, RegisterPage } from "../pages";

export function AuthRouter() {

  return (
    <Routes>

      {/* LoginPage */}
      <Route path="login" element={<LoginPage />} />

      {/* RegisterPage */}
      <Route path="register" element={<RegisterPage />} />

      {/* Rutas Alternativas */}
      <Route path="/*" element={<Navigate to={'/auth/login'} />} />

    </Routes>
  );
};