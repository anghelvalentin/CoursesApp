import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../../services/courses.service';
import { Course } from '../../common/course';
import { ActivatedRoute, Router } from '@angular/router';
import { EnrolmentService } from '../../services/enrolment.service';

@Component({
  selector: 'course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
    course: Course;
    id;
    isEnrolled;
    constructor(private route: ActivatedRoute, private router: Router, private enrolmentService: EnrolmentService) { }

    ngOnInit() {
        this.id = this.route.snapshot.params["id"];
 
        this.enrolmentService.get(this.id)
            .subscribe(e => {
                this.course = e.course;
                this.isEnrolled = e.enrolment != null ? true : false;
            });
        
        
    }


    enroll() {
        let enrolment = { CourseId: this.id };
        if (!this.isEnrolled) {
            this.enrolmentService.create(enrolment).subscribe(e => {
                console.log(e);
            });
        }
        else {
            console.log("Stergem " + this.id);
            this.enrolmentService.delete(this.id);
        }
        this.isEnrolled = !this.isEnrolled;
    }
}
