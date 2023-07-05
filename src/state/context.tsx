import React, {createContext, useContext, useReducer} from 'react';
import {reducer} from './reducer';
import {Store, StoreDispatch} from './storeInterface';

const INITIAL_STATE = {
  userToken: null,
  isLoading: false,
  error: [],
};

const StoreContextDispatcher = createContext<{
  dispatch: React.Dispatch<StoreDispatch>;
}>({
  dispatch: () => {},
});

const StoreContext = createContext<{state: Store}>({state: INITIAL_STATE});

const useStoreDispatch = () => {
  return useContext(StoreContextDispatcher);
};

const StoreProvider = ({children}: {children: React.ReactNode}) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  return (
    <StoreContextDispatcher.Provider value={{dispatch}}>
      <StoreContext.Provider value={{state}}>{children}</StoreContext.Provider>
    </StoreContextDispatcher.Provider>
  );
};

export {StoreProvider, useStoreDispatch};
