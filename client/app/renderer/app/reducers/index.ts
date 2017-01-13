import { ActionReducer } from '@ngrx/store';
import { combineReducers } from '@ngrx/store';

import * as fromUser from './user';


export interface AppState {
  user: fromUser.State;
}

const reducers = {
  user: fromUser.reducer
};

export const rootReducer: ActionReducer<AppState> = combineReducers(reducers);
