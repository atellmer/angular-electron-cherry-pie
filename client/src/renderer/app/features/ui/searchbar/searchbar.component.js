var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ElementRef } from '@angular/core';
var SearchbarComponent = (function () {
    function SearchbarComponent(elementRef) {
        this.elementRef = elementRef;
    }
    SearchbarComponent.prototype.ngOnInit = function () { };
    SearchbarComponent.prototype.onFocus = function (ev) {
        this.elementRef.nativeElement.style.backgroundColor = 'rgba(255, 255, 255, 0.20)';
    };
    SearchbarComponent.prototype.onBlur = function (ev) {
        this.elementRef.nativeElement.style.backgroundColor = 'rgba(255, 255, 255, 0.15)';
    };
    return SearchbarComponent;
}());
SearchbarComponent = __decorate([
    Component({
        selector: 'tm-searchbar',
        templateUrl: 'searchbar.component.html',
        styleUrls: ['searchbar.component.css']
    }),
    __metadata("design:paramtypes", [ElementRef])
], SearchbarComponent);
export { SearchbarComponent };
//# sourceMappingURL=searchbar.component.js.map