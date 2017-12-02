import { Component, OnInit } from '@angular/core';
import { EnrolmentService } from '../../services/enrolment.service';

@Component({
  selector: 'my-courses',
  templateUrl: './my-courses.component.html',
  styleUrls: ['./my-courses.component.css']
})
export class MyCoursesComponent implements OnInit {
    enrolments = [];
    oldEnrolments = [];
    viewMode = 'loading';
    showOldCourses = false;
    constructor(private enrolmentService: EnrolmentService) { }

    ngOnInit() {

        this.enrolmentService.getAll().subscribe(enrolments=> {
            
            this.enrolments = enrolments.filter(e => new Date(e.date) > new Date());
            this.enrolments.sort((a, b) => {
                return new Date(a.date) > new Date(b.date) ? 1 : -1
            });
            this.oldEnrolments = enrolments.filter(e => new Date(e.date) < new Date());
            this.oldEnrolments.sort((a, b) => {
                return new Date(a.date) > new Date(b.date) ? 1 : -1
            });
            

            this.viewMode = (this.enrolments.length > 0 || this.oldEnrolments.length>0) ? 'courses' : 'noCourses';
        });
    }

    
}
