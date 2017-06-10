var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable } from '@angular/core';
export var ActionTypes = {
    FETCH_USER: '[User] Fetch user',
    FETCH_DIALOGS: '[User] Fetch dialogs'
};
var UserActions = (function () {
    function UserActions() {
    }
    UserActions.prototype.fetchUser = function (payload) {
        return {
            type: ActionTypes.FETCH_USER,
            payload: payload
        };
    };
    UserActions.prototype.fetchDialogs = function (payload) {
        return {
            type: ActionTypes.FETCH_DIALOGS,
            payload: payload
        };
    };
    return UserActions;
}());
UserActions = __decorate([
    Injectable()
], UserActions);
export { UserActions };
//# sourceMappingURL=user.js.map