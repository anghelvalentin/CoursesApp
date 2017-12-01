import { Injectable } from '@angular/core';
import { Http, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { JwtHelper, tokenNotExpired } from 'angular2-jwt';


export class Auth {
    isAdmin: boolean;
    isUser: boolean;
}

@Injectable()
export class AuthService {
   
    isLoggedIn() {
        return tokenNotExpired();
    }

    get currentUser() {
        let token = localStorage.getItem("token");
        if (!token) return null;

        return new JwtHelper().decodeToken(token);
    }

}

