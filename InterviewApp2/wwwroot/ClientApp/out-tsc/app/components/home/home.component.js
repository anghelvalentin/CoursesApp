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
var auth_service_1 = require("../../services/auth.service");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(coursesService, authService) {
        this.coursesService = coursesService;
        this.authService = authService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.coursesService.getAll().subscribe(function (courses) { return _this.filteredCourses = _this.courses = courses; });
    };
    HomeComponent.prototype.keyup = function (courseTitleHtml) {
        var courseTitle = courseTitleHtml.value.toLowerCase();
        if (courseTitle.length > 1) {
            this.filteredCourses = this.courses.filter(function (course) { return course.name.toLowerCase().indexOf(courseTitle) > -1 || course.description.toLowerCase().indexOf(courseTitle) > -1; });
        }
        else {
            this.filteredCourses = this.courses;
        }
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'home',
            templateUrl: './home.component.html',
            styleUrls: ['./home.component.css']
        }),
        __metadata("design:paramtypes", [courses_service_1.CoursesService, auth_service_1.AuthService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map