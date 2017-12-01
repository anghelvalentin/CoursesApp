"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Auth = /** @class */ (function () {
    function Auth() {
    }
    return Auth;
}());
exports.Auth = Auth;
var SecurityService = /** @class */ (function () {
    function SecurityService(http) {
        var _this = this;
        this.http = http;
        this.baseUrl = 'http://localhost:52046/api/security/';
        this.options = new http_1.RequestOptions({ withCredentials: true });
        console.log('Creating Service');
        console.log('Service Pre Http');
        this.http.get(this.baseUrl, this.options)
            .map(function (res) { return _this.extractData(res); })
            .subscribe(function (newItem) {
            console.log('Service Subscribe');
            _this.auth = newItem;
        });
    }
    SecurityService.prototype.isUser = function () {
        var _this = this;
        if (!this.auth) {
            return this.http.get(this.baseUrl, this.options)
                .map(function (res) {
                _this.auth = _this.extractData(res);
                return _this.auth.isUser;
            });
        }
        else {
            return this.auth.isUser;
        }
    };
    SecurityService.prototype.extractData = function (res) {
        if (res.status < 200 || res.status >= 300) {
            throw new Error('Bad response status: ' + res.status);
        }
        var b = res.json ? res.json() : null;
        return (b || {});
    };
    SecurityService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], SecurityService);
    return SecurityService;
}());
exports.SecurityService = SecurityService;
//# sourceMappingURL=security.service.js.map