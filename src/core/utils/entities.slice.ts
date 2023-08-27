import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

type EntryStatus = 'pending' | 'in-progress' | 'completed';

type Entry = {
  _id: string;
  description: string;
  createdAt: number;
  status: EntryStatus;
}

export interface EntriesState {
  entries: Entry[]
}

const ENTRIES_INITIAL_STATE: EntriesState = {
  entries: [],
}

export const counterSlice = createSlice({
  name: 'entity',
  initialState: ENTRIES_INITIAL_STATE,
  reducers: {
    ADD_ENTITY: (state) => {

      state.value += 1
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer
