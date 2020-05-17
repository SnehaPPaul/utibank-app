import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, FormControl } from "@angular/forms";
import { LoginService } from "../services/login.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private router: Router
  ) {}

  ngOnInit() {}

  user: FormGroup = this.fb.group({
    username: new FormControl(null),
    password: new FormControl(null)
  });

  message: any;

  // submit() {
  //   console.log(this.user.value);
  //   this.loginService.getToken(this.user.value).subscribe(
  //     resp => {
  //       console.log(resp);
  //       this.loginService.isAuthenticated = true;
  //       this.loginService.token = resp["token"];
  //       this.message = "";
  //       this.router.navigate(["/home"]);
  //     },
  //     error => {
  //       console.log(error);
  //       this.loginService.isAuthenticated = false;
  //       this.message = "please check User Name or Password is incorrect";
  //     }
  //   );
  // }

  authenticate(){
    console.log("authenticate");
    console.log(this.user);
    this.loginService.authenticate(this.user.value).subscribe(
      resp=>{
        this.loginService.isAuthenticated = true;
        this.loginService.token = resp["token"];
        this.loginService.user = resp["user"];
        this.message = ""; 
        this.router.navigate(["/accounts"]);
      },
      error=>{
        this.loginService.isAuthenticated = false;
        this.message = "please check User Name or Password is incorrect";
      }
    )
  }


  register(){
    this.router.navigate(['/register']);
  }
}
