import { createContext, useReducer } from 'react';
import appReducer from './appReducer';

export const AppContext = createContext({});

export function AppContextProvider({ children }) {
  const [appState, dispatch] = useReducer(appReducer, {
    events: {
      events: [],
      meta: { total: '-' },
      loading: true,
    },
  });
  return (
    <AppContext.Provider value={{ appState, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}
