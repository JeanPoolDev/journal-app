import { collection, doc, setDoc } from "firebase/firestore/lite";
import { addNewEmptyNote, savingNewNote, setActiveNote, setNotes, setSaving, updateNote } from "./SliceJournal"
import { FirebaseDB } from "../../firebase/config";
import { loadNotes } from "../../helpers/loadNotes";


export const startNewNote = () => {
  return async (dispatch, getState) => {
    dispatch(savingNewNote());

    const { uid } = getState().auth;

    const newNote = {
      title: '',
      body: '',
      imageUrls: [],
      date: new Date().getTime()
    };

    const refDoc = doc(collection(FirebaseDB, `${uid}/journal/notes`));
    await setDoc(refDoc, newNote);

    newNote.id = refDoc.id;

    dispatch(addNewEmptyNote(newNote));
    dispatch(setActiveNote(newNote));
  }
}

export const startLoadingNotes = () => {
  return async (dispatch, getState) => {

    const { uid } = getState().auth;

    const notes = await loadNotes(uid);

    dispatch(setNotes(notes));

  }
}

export const startUpdateNote = () => {
  return async (dispatch, getState) => {

    dispatch(setSaving());

    const { uid } = getState().auth;
    const { active: note } = getState().journal;

    const newNote = { ...note };
    delete newNote.id;

    const docRef = doc(FirebaseDB, `${uid}/journal/notes/${note.id}`);
    await setDoc(docRef, newNote, { merge: true });

    dispatch(updateNote(note))
    console.log('guardada')

  }
}
