
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, updateProfile } from 'firebase/auth'
import { FirebaseAuth } from './config';

//* popup de google
const googleProvider = new GoogleAuthProvider();

//? Creación de las funciones de Firebase

export const loginWithGoogle = async () => {
  try {

    const result = await signInWithPopup(FirebaseAuth, googleProvider);

    const { email, photoURL, uid, displayName } = result.user;

    return {
      ok: true,
      email, photoURL, uid, displayName
    }


  } catch (error) {
    return {
      ok: false,
      errorMessage: error.message
    }
  }
}

export const registerUserWithEmailPassword = async ({ email, password, displayName }) => {
  try {

    const resp = await createUserWithEmailAndPassword(FirebaseAuth, email, password)
    const { photoURL, uid } = resp.user;

    await updateProfile(FirebaseAuth.currentUser, { displayName });

    return {
      ok: true,
      email, password, photoURL, uid, displayName
    }

  } catch (error) {
    return {
      ok: false,
      errorMessage: error.message
    }
  }
}

export const loginWithEmailPassword = async ({ email, password }) => {
  try {
    const resp = await signInWithEmailAndPassword(FirebaseAuth, email, password);

    const { uid, displayName, photoURL } = resp.user;

    return {
      ok: true,
      uid, displayName, photoURL, email
    }
  } catch (error) {
    return {
      ok: false,
      errorMessage: error.message
    }
  }
}

export const logoutUser = async () => {
  return await FirebaseAuth.signOut();
}