import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { DataService } from './data.service';

@Injectable()
export class CoursesService extends DataService {

    constructor(http: Http) {
        super("http://localhost:52046/api/Courses", http);
    }

}
