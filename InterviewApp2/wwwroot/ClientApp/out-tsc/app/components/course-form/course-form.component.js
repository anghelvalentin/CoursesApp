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
var courses_service_1 = require("../../services/courses.service");
var router_1 = require("@angular/router");
var CourseFormComponent = /** @class */ (function () {
    function CourseFormComponent(coursesService, router) {
        this.coursesService = coursesService;
        this.router = router;
        this.spotsDefault = 30;
    }
    CourseFormComponent.prototype.submit = function (form) {
        var _this = this;
        console.log(form.value);
        this.coursesService.create(form.value).subscribe(function (course) {
            _this.router.navigate(["/"]);
        });
    };
    CourseFormComponent = __decorate([
        core_1.Component({
            selector: 'app-course-form',
            templateUrl: './course-form.component.html',
            styleUrls: ['./course-form.component.css']
        }),
        __metadata("design:paramtypes", [courses_service_1.CoursesService, router_1.Router])
    ], CourseFormComponent);
    return CourseFormComponent;
}());
exports.CourseFormComponent = CourseFormComponent;
//# sourceMappingURL=course-form.component.js.map