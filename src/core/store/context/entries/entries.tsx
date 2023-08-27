import { store } from '@core/model/store';
import { createContext, useContext, useReducer, useState } from 'react';
import { Provider } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

type Status = 'pending' | 'completed' | 'in-progress';

type Entry = {
  id: string;
  description: string;
  createdAt: number;
  status: Status
};

type Context = {
  entries: Entry[];
  dispatch: (action: EntryAction) => void;
};

type EntriesState = {
  entries: Entry[];
};

const Entries = createContext({} as Context);

const initialState: EntriesState = {
  entries: [
    {
      id: uuidv4(),
      createdAt: Date.now(),
      description: 'Create a new project',
      status: 'pending',
    }
  ],
};

type EntryAction = {
  type: 'ADD_ENTRY';
  payload: Entry;
}

const reducer = (state: EntriesState, action: EntryAction) => {
  const {  type, payload } = action;

  const switchObject = {
    'ADD_ENTRY': {
      ...state,
      entries: [...state.entries, payload],
    },
  }

  return switchObject[type] || state;
};

export const EntriesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Entries.Provider value={{ entries: state.entries, dispatch }}>
      <Provider store={store}>
        {children}
      </Provider>
    </Entries.Provider>
  );
};

export const useEntries = () => useContext(Entries);
