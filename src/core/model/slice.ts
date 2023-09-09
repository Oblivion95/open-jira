import { Entry } from '@core/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

export const entriesSlice = createSlice({
  name: 'entries',
  initialState: {
    entries: [
      {
        id: uuidv4(),
        createdAt: "new Date().toISOString()",
        description: "Create a new project",
        status: "pending",
      },
    ],
  },
  reducers: {
    addEntry: (state, action: PayloadAction<Entry>) => {
      state.entries.push(action.payload);
    }
  },
});

export const { addEntry } = entriesSlice.actions;
export const { reducer } = entriesSlice;
