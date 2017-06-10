var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
var FakeUserService = (function () {
    function FakeUserService(http) {
        this.http = http;
    }
    FakeUserService.prototype.getFakeUser = function (options) {
        var params = new URLSearchParams();
        var URL = 'https://randomuser.me/api';
        params.set('results', options.results);
        var data$ = this.http
            .get(URL, { search: params })
            .map(function (res) { return res.json(); });
        return data$;
    };
    return FakeUserService;
}());
FakeUserService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http])
], FakeUserService);
export { FakeUserService };
//# sourceMappingURL=fake-user.service.js.map