import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../../services/courses.service';
import { Course } from '../../common/course';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
    course: Course;
    constructor(private coursesService: CoursesService, private route: ActivatedRoute, private router:Router) { }

    ngOnInit() {
        let id = this.route.snapshot.params["id"];
        this.coursesService
            .get(id)
            .subscribe(course => {
                this.course = course;
            });
    }


    enroll() {
        alert("Te-ai inrolat");
        this.router.navigate(['/']);
    }
}
