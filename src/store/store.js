import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './sliceAuth'
import { journalSlice } from './journal/SliceJournal'

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    journal: journalSlice.reducer
  },
})

