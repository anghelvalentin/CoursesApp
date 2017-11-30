import { Injectable } from '@angular/core';
import { Http, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';


export class Auth {
    isAdmin: boolean;
    isUser: boolean;
}

@Injectable()
export class AuthService {
    private baseUrl = 'http://localhost:52046/api/security/';
    private auth: Auth;
    private options = new RequestOptions({ withCredentials: true });

    constructor(private http: Http) {

        this.http.get(this.baseUrl, this.options)
            .map((res) => this.extractData<Auth>(res))
            .subscribe(newItem => {
                this.auth = newItem

                console.warn(this.auth);
            })

    }

    public isLoggedIn(): Observable<boolean> | boolean {
        //console.log(this.auth);
        console.log(this.auth);
        if (!this.auth) {
            return this.http.get(this.baseUrl, this.options)
                .map(res => {
                    this.auth = this.extractData<Auth>(res);
                    return this.auth.isUser;
                });
        }
        else {
            return this.auth.isUser;
        }


    }

    private extractData<T>(res) {
        if (res.status < 200 || res.status >= 300) {
            throw new Error('Bad response status: ' + res.status);
        }
        const b= res.json ? res.json() : null;
        return <T>(b || {});
    }


}

