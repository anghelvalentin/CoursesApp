import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../../services/courses.service';

@Component({
  selector: 'home',
  templateUrl:'./home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    courses: any[];

    constructor(private coursesService: CoursesService) { }

    ngOnInit() {
        this.coursesService.getAll().subscribe(courses => this.courses = courses);
  }

}
