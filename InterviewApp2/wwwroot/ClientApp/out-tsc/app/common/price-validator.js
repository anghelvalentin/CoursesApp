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
var forms_1 = require("@angular/forms");
var core_1 = require("@angular/core");
// validation function
function ValidatePriceFactory() {
    return function (c) {
        var isValid = Number(c.value) >= 0;
        if (isValid) {
            return null;
        }
        else {
            return {
                price: {
                    valid: false
                }
            };
        }
    };
}
var PriceValidator = /** @class */ (function () {
    function PriceValidator() {
        this.validator = ValidatePriceFactory();
    }
    PriceValidator_1 = PriceValidator;
    PriceValidator.prototype.validate = function (c) {
        return this.validator(c);
    };
    var PriceValidator_1;
    PriceValidator = PriceValidator_1 = __decorate([
        core_1.Directive({
            selector: '[positivePrice][ngModel]',
            providers: [
                { provide: forms_1.NG_VALIDATORS, useExisting: PriceValidator_1, multi: true }
            ]
        }),
        __metadata("design:paramtypes", [])
    ], PriceValidator);
    return PriceValidator;
}());
exports.PriceValidator = PriceValidator;
//# sourceMappingURL=price-validator.js.map