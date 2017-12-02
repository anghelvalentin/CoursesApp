import { Component, OnInit } from '@angular/core';
import { EnrolmentService } from '../../services/enrolment.service';

@Component({
  selector: 'my-courses',
  templateUrl: './my-courses.component.html',
  styleUrls: ['./my-courses.component.css']
})
export class MyCoursesComponent implements OnInit {
    enrolments=[];

    constructor(private enrolmentService: EnrolmentService) { }

    ngOnInit() {

        this.enrolmentService.getAll().subscribe(enrolments => {
            // fa ceva si pentru cele mai vechi sa se vada
            enrolments = enrolments.filter(e => new Date(e.date) > new Date());
            enrolments.sort((a, b) => {
                return new Date(a.date) > new Date(b.date) ? 1 : -1
            });
            this.enrolments = enrolments;
        });
  }
}
