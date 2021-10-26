import { createContext, useReducer } from 'react';
import appReducer from './appReducer';

const initialState = {
  events: {
    events: [],
    meta: { total: '-' },
    loading: true,
  },
};

export const AppContext = createContext(initialState);

export function AppContextProvider({ children }) {
  const [appState, dispatch] = useReducer(appReducer, initialState);
  return (
    <AppContext.Provider value={{ appState, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}
