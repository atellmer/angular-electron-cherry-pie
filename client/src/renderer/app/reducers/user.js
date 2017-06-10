var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import { ActionTypes } from '../actions/user';
var initialState = {
    me: {
        id: '',
        name: {
            first: '',
            last: ''
        },
        avatar: {
            thumbnail: ''
        },
        online: false
    },
    dialogs: []
};
export function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case ActionTypes.FETCH_USER:
            return __assign({}, state, { me: action.payload });
        case ActionTypes.FETCH_DIALOGS:
            return __assign({}, state, { dialogs: action.payload });
        default:
            return state;
    }
}
//# sourceMappingURL=user.js.map