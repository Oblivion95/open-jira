import { createContext, useReducer, useContext } from "react";

type UIContextProps = {
  sidebarOpen: boolean;
  dispatch: (action: any) => void;
};

const UIContext = createContext<UIContextProps>({} as UIContextProps);

const INITIAL_STATE: UIContextProps = {
  sidebarOpen: false,
  dispatch: () => {},
};

const uiReducer = (state: UIContextProps, action: any) => {
  const { type, payload } = action;
  const reducerObject: any = {
    OPEN_SIDEBAR: {
      ...state,
      sidebarOpen: true,
    },
    CLOSE_SIDEBAR: {
      ...state,
      sidebarOpen: false,
    },
    TOGGLE_SIDEBAR: {
      ...state,
      sidebarOpen: !state.sidebarOpen,
    },
  };

  return reducerObject[type] || state;
};


export const useUIContext = () => useContext(UIContext);

const UIProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(uiReducer, INITIAL_STATE);

  const toggleSidebar = () => {
    dispatch({ type: "TOGGLE_SIDEBAR" });
  };

  return (
    <UIContext.Provider
      value={{
        sidebarOpen: state.sidebarOpen,
        toggleSidebar,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};

export default UIProvider;
