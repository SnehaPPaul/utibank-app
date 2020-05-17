import { Component } from '@angular/core';
import { LoginService } from './services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'authenticator-ui';

  constructor(private loginService:LoginService,private router:Router){}


  logout(){
    this.loginService.isAuthenticated=false;
    this.router.navigate(["/login"]);
  }
}
