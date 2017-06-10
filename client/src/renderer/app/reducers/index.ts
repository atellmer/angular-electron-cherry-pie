import { ActionReducer } from '@ngrx/store';
import { combineReducers } from '@ngrx/store';

import * as fromUser from './user';


export interface AppState {
  user: fromUser.State;
}

const reducers = {
  user: fromUser.reducer
};

const reducer = combineReducers(reducers);

export function rootReducer(state: any, action: any): ActionReducer<AppState> {
  return reducer(state, action);
}
