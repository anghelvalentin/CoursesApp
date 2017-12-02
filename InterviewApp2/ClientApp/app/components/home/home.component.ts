import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../../services/courses.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'home',
  templateUrl:'./home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    courses: any[];
    filteredCourses: any[];

    constructor(private coursesService: CoursesService, private authService: AuthService) { }

    ngOnInit() {
        this.coursesService.getAll().subscribe(courses => this.filteredCourses = this.courses = courses);
    }

    keyup(courseTitleHtml: HTMLInputElement) {
        let courseTitle = courseTitleHtml.value.toLowerCase();
        if (courseTitle.length > 1) {
            this.filteredCourses = this.courses.filter(course => (course.name as String).toLowerCase().indexOf(courseTitle) > -1 || (course.description as String).toLowerCase().indexOf(courseTitle) > -1);
        }
        else {
            this.filteredCourses = this.courses;
        }

    }

}
