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
var CourseComponent = /** @class */ (function () {
    function CourseComponent(coursesService, route, router) {
        this.coursesService = coursesService;
        this.route = route;
        this.router = router;
    }
    CourseComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this.route.snapshot.params["id"];
        this.coursesService
            .get(id)
            .subscribe(function (course) {
            _this.course = course;
        });
    };
    CourseComponent.prototype.enroll = function () {
        alert("Te-ai inrolat");
        this.router.navigate(['/']);
    };
    CourseComponent = __decorate([
        core_1.Component({
            selector: 'course',
            templateUrl: './course.component.html',
            styleUrls: ['./course.component.css']
        }),
        __metadata("design:paramtypes", [courses_service_1.CoursesService, router_1.ActivatedRoute, router_1.Router])
    ], CourseComponent);
    return CourseComponent;
}());
exports.CourseComponent = CourseComponent;
//# sourceMappingURL=course.component.js.map