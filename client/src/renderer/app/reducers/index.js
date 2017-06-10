import { combineReducers } from '@ngrx/store';
import * as fromUser from './user';
var reducers = {
    user: fromUser.reducer
};
var reducer = combineReducers(reducers);
export function rootReducer(state, action) {
    return reducer(state, action);
}
//# sourceMappingURL=index.js.map