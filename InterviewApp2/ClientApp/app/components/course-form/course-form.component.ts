import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../../services/courses.service';
import { NgForm } from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent  {
    readonly spotsDefault = 30;

    constructor(private coursesService: CoursesService, private router: Router) {
    }

    submit(form: NgForm) {
        console.log(form.value);
        this.coursesService.create(form.value).subscribe(course => {
            this.router.navigate(["/"]);
        }
        );
    }

}
