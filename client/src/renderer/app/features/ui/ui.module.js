var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';
// Components
import { SearchbarComponent } from './searchbar';
import { AvatarComponent } from './avatar';
import { BadgeComponent } from './badge';
var UIModule = (function () {
    function UIModule() {
    }
    return UIModule;
}());
UIModule = __decorate([
    NgModule({
        imports: [
            MaterialModule.forRoot()
        ],
        exports: [
            SearchbarComponent,
            AvatarComponent,
            BadgeComponent
        ],
        declarations: [
            SearchbarComponent,
            AvatarComponent,
            BadgeComponent
        ],
        providers: [],
    })
], UIModule);
export { UIModule };
//# sourceMappingURL=ui.module.js.map