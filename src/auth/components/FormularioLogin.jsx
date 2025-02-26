import { Link } from "react-router";
import { FormularioLayout } from "../layout/FormularioLayout";
import { useDispatch } from "react-redux";
import { startLoginWithEmailPassword, startLoginWithGoogle } from "../../store/thunks";
import { useForm } from "../../hooks/useForm";

export function FormularioLogin() {

  const dispatch = useDispatch();
  const { onInputChange, email, password } = useForm({
    email: '',
    password: ''
  })

  const loginWithEmailPassword = (e) => {
    e.preventDefault();
    dispatch(startLoginWithEmailPassword({ email, password }));
  }

  const loginGoogle = () => {
    dispatch(startLoginWithGoogle())
  }

  return (
    <FormularioLayout title='Ingresar a Journal App'>
      <form className="space-y-6" onSubmit={loginWithEmailPassword}>
        <div>
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Tu Correo
          </label>
          <input
            value={email}
            onChange={onInputChange}
            type="email"
            name="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@gmail.com" required />
        </div>
        <div>
          <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Tu Contraseña
          </label>
          <input
            value={password}
            onChange={onInputChange}
            type="password"
            name="password"
            id="password"
            placeholder="••••••••"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
        </div>

        <button
          type="submit"
          className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Ingresar
        </button>

        <button
          onClick={loginGoogle}
          type="submit"
          className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Google
        </button>

        <div className="text-sm font-medium text-gray-500 dark:text-gray-300 flex justify-end space-x-2">
          <p>¿No tienes cuenta?</p>
          <Link
            to={'/auth/register'}
            className="text-blue-700 hover:underline dark:text-blue-500">
            Crear Cuenta
          </Link>
        </div>

      </form>
    </FormularioLayout>
  );
};