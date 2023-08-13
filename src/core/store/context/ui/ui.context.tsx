import { createContext, useReducer } from "react";

type UIContextProps = {
  sidebarOpen: boolean;
};

const UIContext = createContext<UIContextProps>({} as UIContextProps);

const INITIAL_STATE: UIContextProps = {
  sidebarOpen: false,
};

const UIProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer<UIContextProps>();

  return (
    <UIContext.Provider value={INITIAL_STATE}>{children}</UIContext.Provider>
  );
};
