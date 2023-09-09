import { store } from "@core/model/store";
import { createContext, useContext, useReducer } from "react";
import { Provider } from "react-redux";
import { v4 as uuidv4 } from "uuid";

type Status = "pending" | "completed" | "in-progress";

type Entry = {
  id: string;
  description: string;
  createdAt: number;
  status: Status;
};

type Context = {
  entries: Entry[];
  addNewEntry: (description: string) => void;
};

type EntriesState = {
  entries: Entry[];
  isAdding: boolean;
};

const Entries = createContext({} as Context);

const initialState: EntriesState = {
  entries: [
    {
      id: uuidv4(),
      createdAt: "new Date().toISOString()",
      description: "Create a new project",
      status: "pending",
    },
  ],
};

type EntryAction = {
  type: "entry/ADD_ENTRY";
  payload: Entry;
} | {
  type: "entry/SET_IS_ADDING_ENTRY";
  payload: boolean;
};

const reducer = (state: EntriesState, action: EntryAction) => {
  const { type, payload } = action;

  const switchObject = {
    "entry/ADD_ENTRY": {
      ...state,
      entries: [...state.entries, payload],
      isAdding: false,
    },
    "entry/SET_IS_ADDING_ENTRY": {
      ...state,
      isAdding: payload,
    },
  };

  return switchObject[type] || state;
};

export const EntriesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addNewEntry = (description: string) => {
    dispatch({
      type: "entry/ADD_ENTRY",
      payload: {
        id: uuidv4(),
        createdAt: Date.now(),
        description,
        status: "pending",
      },
    });
  };

  return (
    <Entries.Provider value={{ entries: state.entries, addNewEntry }}>
      <Provider store={store}>{children}</Provider>
    </Entries.Provider>
  );
};

export const useEntries = () => useContext(Entries);
