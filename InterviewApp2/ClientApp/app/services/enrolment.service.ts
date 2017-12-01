import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { Http } from '@angular/http';

@Injectable()
export class EnrolmentService extends DataService {

    constructor(http: Http) {
        super("http://localhost:52046/api/Enrollments", http)
    }

}
