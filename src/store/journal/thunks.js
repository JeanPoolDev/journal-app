import { collection, deleteDoc, doc, setDoc } from "firebase/firestore/lite";
import { addNewEmptyNote, deleteNoteById, savingNewNote, setActiveNote, setNotes, setPhotosToActiveNote, setSaving, updateNote } from "./SliceJournal"
import { FirebaseDB } from "../../firebase/config";
import { loadNotes } from "../../helpers/loadNotes";
import { cloudinary } from "../../helpers/cloudinary";


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

export const startUploadImages = (files = []) => {
  return async (dispatch) => {

    dispatch(setSaving());

    const newFiles = [];

    for (const file of files) {
      newFiles.push(cloudinary(file))
    }

    const photoUrls = await Promise.all(newFiles);

    dispatch(setPhotosToActiveNote(photoUrls));
  }
}

export const startDeleveNote = () => {
  return async (dispatch, getState) => {

    const { uid } = getState().auth;
    const { active: note } = getState().journal;

    const docRef = doc(FirebaseDB, `${uid}/journal/notes/${note.id}`);
    await deleteDoc(docRef);

    dispatch(deleteNoteById(note.id))

  }
}