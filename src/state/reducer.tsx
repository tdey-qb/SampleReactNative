import {actions} from './actions';
import {StoreDispatch, Store} from './storeInterface';

export const reducer = (prevState: Store, action: StoreDispatch) => {
  switch (action.type) {
    case actions.CREDENTIALS:
      return {
        ...prevState,
        credentials: action.payload,
        isLoading: false,
      };
    case actions.ERROR:
      return {
        ...prevState,
        error:
          prevState && prevState.error
            ? [...prevState.error, action.payload]
            : [],
      };
    case actions.CLEAR_ERROR:
      return {
        ...prevState,
        error: [],
      };
    default:
      return prevState;
  }
};
