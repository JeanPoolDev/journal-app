
import { createSlice } from '@reduxjs/toolkit';
export const journalSlice = createSlice({
  name: 'journal',
  initialState: {
    isSaving: false,
    messageSaved: '',
    notes: [],
    active: null,
    // active: {
    //   id: 'asd123',
    //   title: '',
    //   body: '',
    //   date: 213213,
    //   imageUrls: [],
    // }
  },
  reducers: {
    //* se usa para verificar que termino una tarea
    savingNewNote: (state) => {
      state.isSaving = true
    },
    //* agreaga una nueva nota en la lista []
    addNewEmptyNote: (state, action) => {
      state.notes.push(action.payload);
      state.isSaving = false;
    },
    //* se obtiene la nota especifica {}
    setActiveNote: (state, action) => {
      state.active = action.payload
      state.messageSaved = '';
    },
    //* recupera el arreglo de notas de firebase []
    setNotes: (state, action) => {
      state.notes = action.payload;
    },
    //* se usa para verificar si se edita la nota
    setSaving: (state) => {
      state.isSaving = true;
      state.messageSaved = '';
    },
    updateNote: (state, action) => {
      state.isSaving = false;

      state.notes = state.notes.map(note => {
        if (note.id === action.payload.id) {
          return action.payload
        }
        return note
      })
    }
  }
});
export const {
  savingNewNote,
  addNewEmptyNote,
  setActiveNote,
  setNotes,
  setSaving,
  updateNote
} = journalSlice.actions;