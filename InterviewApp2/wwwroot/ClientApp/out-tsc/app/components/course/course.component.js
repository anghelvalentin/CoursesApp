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
var router_1 = require("@angular/router");
var enrolment_service_1 = require("../../services/enrolment.service");
var CourseComponent = /** @class */ (function () {
    function CourseComponent(route, router, enrolmentService) {
        this.route = route;
        this.router = router;
        this.enrolmentService = enrolmentService;
    }
    CourseComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = this.route.snapshot.params["id"];
        this.enrolmentService.get(this.id)
            .subscribe(function (e) {
            _this.course = e.course;
            _this.isEnrolled = e.enrolment != null ? true : false;
        });
    };
    CourseComponent.prototype.enroll = function () {
        var enrolment = { CourseId: this.id };
        if (!this.isEnrolled) {
            this.enrolmentService.create(enrolment).subscribe(function (e) {
                console.log(e);
            });
        }
        else {
            console.log("Stergem " + this.id);
            this.enrolmentService.delete(this.id);
        }
        this.isEnrolled = !this.isEnrolled;
    };
    CourseComponent = __decorate([
        core_1.Component({
            selector: 'course',
            templateUrl: './course.component.html',
            styleUrls: ['./course.component.css']
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute, router_1.Router, enrolment_service_1.EnrolmentService])
    ], CourseComponent);
    return CourseComponent;
}());
exports.CourseComponent = CourseComponent;
//# sourceMappingURL=course.component.js.map