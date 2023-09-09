import { createContext, useReducer, useContext } from "react";

type UIContextProps = {
  sidebarOpen: boolean;
  toggleSidebar: (action: any) => void;
  toggleAddingEntry: (value?: boolean) => void;
  isAdding: boolean;
};

const UIContext = createContext<UIContextProps>({} as UIContextProps);

const INITIAL_STATE: UIContextProps = {
  sidebarOpen: false,
  toggleSidebar: () => {},
  toggleAddingEntry: () => {},
  isAdding: false,
};

type PayloadObject = {
  TOGGLE_SIDEBAR: boolean;
  TOGGLE_ADDING: boolean;
}

const uiReducer = (state: UIContextProps, action: any) => {
  const { type, payload } = action;
  const reducerObject: any = {
    TOGGLE_SIDEBAR: {
      ...state,
      sidebarOpen: !state.sidebarOpen,
    },
    TOGGLE_ADDING: {
      ...state,
      isAdding: payload,
    },
  };

  return reducerObject[type] || state;
};

export const useUIContext = () => useContext(UIContext);

const   UIProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(uiReducer, INITIAL_STATE);

  const toggleSidebar = () => {
    dispatch({ type: "TOGGLE_SIDEBAR" });
  };

  const toggleAddingEntry = (value: boolean) => dispatch({ type: "TOGGLE_ADDING", payload: value });

  return (
    <UIContext.Provider
      value={{
        toggleSidebar,
        toggleAddingEntry,
        sidebarOpen: state.sidebarOpen,
        isAdding: state.isAdding,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};

export default UIProvider;
