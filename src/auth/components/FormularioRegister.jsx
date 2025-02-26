import { Link } from "react-router";
import { FormularioLayout } from "../layout/FormularioLayout";
import { useForm } from "../../hooks/useForm";
import { useDispatch } from "react-redux";
import { startRegisterUserWithEmailPassword } from "../../store/thunks";

const initalValue = {
  displayName: 'Jean Pool',
  email: 'pool@gmail.com',
  password: '966363050'
}

export function FormularioRegister() {

  const { displayName, email, password, onInputChange } = useForm(initalValue);

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();

    console.log({ displayName, email, password })
    dispatch(startRegisterUserWithEmailPassword({ displayName, email, password }))
  }

  return (
    <FormularioLayout title='Crear Cuenta en Journal App'>
      <form className="space-y-6" onSubmit={onSubmit}>
        <div>
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Tu Nombre de Usuario
          </label>
          <input
            value={displayName}
            onChange={onInputChange}
            type="text"
            name="displayName"
            id="name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="juanito123" />
        </div>
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
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@gmail.com" />
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
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" />
        </div>

        <button
          type="submit"
          className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Crear Cuenta
        </button>

        <div className="text-sm font-medium text-gray-500 dark:text-gray-300 flex justify-end space-x-2">
          <p>¡Ya tienes cuenta!</p>
          <Link
            to={'/auth/login'}
            className="text-blue-700 hover:underline dark:text-blue-500">
            Ingresar
          </Link>
        </div>

      </form>
    </FormularioLayout>
  );
};