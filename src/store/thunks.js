
//? Creación de las funciones a llamar a nuestro Slice Redux

import { loginWithEmailPassword, loginWithGoogle, logoutUser, registerUserWithEmailPassword } from "../firebase/providers";
import { chekingCredentials, login, logout } from "./sliceAuth"

export const chekingAuthentication = () => {
  return async (dispatch) => {
    dispatch(chekingCredentials());
  }
}

export const startLoginWithGoogle = () => {
  return async (dispatch) => {

    dispatch(chekingAuthentication());

    const { email, displayName, uid, photoURL, ok, errorMessage } = await loginWithGoogle();

    if (!ok) return dispatch(logout({ errorMessage }));

    dispatch(login({ email, displayName, uid, photoURL }))

  }
}

export const startRegisterUserWithEmailPassword = ({ email, password, displayName }) => {
  return async (dispatch) => {
    dispatch(chekingAuthentication());

    const { photoURL, uid, errorMessage, ok } = await registerUserWithEmailPassword({ email, password, displayName });

    if (!ok) return dispatch(logout({ errorMessage }));

    dispatch(login({ email, uid, photoURL, displayName }))
  }
}

export const startLoginWithEmailPassword = ({ email, password }) => {
  return async (dispatch) => {
    const { uid, displayName, photoURL, errorMessage, ok } = await loginWithEmailPassword({ email, password });

    if (!ok) return dispatch(logout({ errorMessage }));

    dispatch(login({ uid, displayName, photoURL, email }))

  }
}

export const startLogut = () => {
  return async () => {
    await logoutUser();
  }
}