import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { LoginService } from "./login.service";

@Injectable({
  providedIn: "root"
})
export class AuthGuardService implements CanActivate {
  constructor(private loginService: LoginService, private router: Router) {}

  canActivate() {
    console.log("auth-guard");
    if (this.loginService.isAuthenticated) {
      console.log("authenticated");
      return true;
    } else {
      this.router.navigate(["/login"]);
    }
    return true;
  }
}
