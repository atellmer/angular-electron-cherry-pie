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
var PanelContainerComponent = (function () {
    function PanelContainerComponent(store, fakeUserService, userActions) {
        this.store = store;
        this.fakeUserService = fakeUserService;
        this.userActions = userActions;
        this.dialogs$ = this.store.select(function (state) { return state.user.dialogs; });
    }
    PanelContainerComponent.prototype.ngOnInit = function () {
        this.fetchDialogs();
    };
    PanelContainerComponent.prototype.fetchDialogs = function () {
        var _this = this;
        this.fakeUserService
            .getFakeUser({ results: 20 })
            .map(function (res) {
            return res.results.map(function (item, index) {
                return {
                    id: index,
                    user: {
                        id: item.login.salt,
                        name: {
                            first: item.name.first,
                            last: item.name.last
                        },
                        avatar: {
                            thumbnail: item.picture.thumbnail
                        },
                        online: false
                    },
                    message: {
                        from: {
                            id: item.login.salt,
                            name: {
                                first: item.name.first,
                                last: item.name.last
                            },
                            avatar: {
                                thumbnail: item.picture.thumbnail
                            },
                            online: false
                        },
                        to: {
                            id: item.login.salt,
                            name: {
                                first: item.name.first,
                                last: item.name.last
                            },
                            avatar: {
                                thumbnail: item.picture.thumbnail
                            },
                            online: false
                        },
                        value: {
                            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
                        },
                        status: {
                            delivered: false,
                            read: true,
                            new: false
                        },
                        timestamp: new Date()
                    }
                };
            });
        })
            .subscribe(function (res) {
            _this.store.dispatch(_this.userActions.fetchDialogs(res));
        });
    };
    return PanelContainerComponent;
}());
PanelContainerComponent = __decorate([
    Component({
        selector: 'tm-panel-container',
        changeDetection: ChangeDetectionStrategy.OnPush,
        template: "<tm-panel [dialogs]=\"dialogs$ | async\"></tm-panel>",
    }),
    __metadata("design:paramtypes", [Store,
        FakeUserService,
        UserActions])
], PanelContainerComponent);
export { PanelContainerComponent };
//# sourceMappingURL=panel.component.js.map