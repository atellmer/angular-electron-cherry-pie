var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { UserActions } from '../../actions/user';
import { FakeUserService } from '../../shared/services/fake-user.service';
var AppbarContainerComponent = (function () {
    function AppbarContainerComponent(store, fakeUserService, userActions) {
        this.store = store;
        this.fakeUserService = fakeUserService;
        this.userActions = userActions;
        this.me$ = this.store.select(function (state) { return state.user.me; });
    }
    AppbarContainerComponent.prototype.ngOnInit = function () {
        this.fetchUser();
    };
    AppbarContainerComponent.prototype.fetchUser = function () {
        var _this = this;
        this.fakeUserService
            .getFakeUser({ results: 1 })
            .map(function (res) {
            return res.results.map(function (item) {
                return {
                    id: item.login.salt,
                    name: {
                        first: item.name.first,
                        last: item.name.last
                    },
                    avatar: {
                        thumbnail: item.picture.thumbnail
                    },
                    online: true
                };
            });
        })
            .subscribe(function (res) {
            _this.store.dispatch(_this.userActions.fetchUser(res[0]));
        });
    };
    return AppbarContainerComponent;
}());
AppbarContainerComponent = __decorate([
    Component({
        selector: 'tm-appbar-container',
        changeDetection: ChangeDetectionStrategy.OnPush,
        template: "<tm-appbar [me]=\"me$ | async\"></tm-appbar>",
    }),
    __metadata("design:paramtypes", [Store,
        FakeUserService,
        UserActions])
], AppbarContainerComponent);
export { AppbarContainerComponent };
//# sourceMappingURL=appbar.component.js.map