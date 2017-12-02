import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../../services/courses.service';
import { NgForm } from '@angular/forms';
import { Route, Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent implements OnInit {
    course;
    id;
    //readonly spotsDefault = 30;

    constructor(private coursesService: CoursesService, private router: Router, private route: ActivatedRoute) {
    }


    ngOnInit(): void {
        this.id = this.route.snapshot.params["id"];
        if (this.id) {
            this.coursesService.get(this.id)
                .subscribe(c => {
                    c.date = new Date(c.date).toJSON().slice(0, 10).replace(/-/g, '-');
                    this.course = c;
                });
        }
        else {
            this.course = {};
            this.course.spots = 30;
        }
      
    }


    submit(form: NgForm) {
        if (this.id) {
            this.course = form.value;
            this.course.id = Number(this.id);

            this.coursesService.update(this.course).subscribe(r=>
                this.router.navigate(["/"])
            );
        }
        else {
            this.coursesService.create(form.value).subscribe(course => {
                this.router.navigate(["/"]);
            });
        }
    }

}
