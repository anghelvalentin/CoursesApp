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
var enrolment_service_1 = require("../../services/enrolment.service");
var MyCoursesComponent = /** @class */ (function () {
    function MyCoursesComponent(enrolmentService) {
        this.enrolmentService = enrolmentService;
        this.enrolments = [];
    }
    MyCoursesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.enrolmentService.getAll().subscribe(function (enrolments) {
            // fa ceva si pentru cele mai vechi sa se vada
            enrolments = enrolments.filter(function (e) { return new Date(e.date) > new Date(); });
            enrolments.sort(function (a, b) {
                return new Date(a.date) > new Date(b.date) ? 1 : -1;
            });
            _this.enrolments = enrolments;
        });
    };
    MyCoursesComponent = __decorate([
        core_1.Component({
            selector: 'my-courses',
            templateUrl: './my-courses.component.html',
            styleUrls: ['./my-courses.component.css']
        }),
        __metadata("design:paramtypes", [enrolment_service_1.EnrolmentService])
    ], MyCoursesComponent);
    return MyCoursesComponent;
}());
exports.MyCoursesComponent = MyCoursesComponent;
//# sourceMappingURL=my-courses.component.js.map