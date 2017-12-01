import { Component, OnInit,Input } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {
    //@Input("username") username: string;
    constructor(private authService: AuthService) {
    }

  ngOnInit() {
  }

}
