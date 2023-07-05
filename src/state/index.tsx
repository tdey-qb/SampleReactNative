import {StoreProvider, useStoreDispatch} from './context';
import {actions} from './actions';
import {reducer} from './reducer';
import {StoreDispatch, Store} from './storeInterface';

export {StoreProvider, useStoreDispatch, actions, reducer};

export type {StoreDispatch, Store};
