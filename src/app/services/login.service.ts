import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { staticViewQueryIds } from "@angular/compiler";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class LoginService {
  constructor(private httpService: HttpClient) {}

  loginAppUrl: string = "http://localhost:7070/";
  isAuthenticated: boolean = false;
  user:any;
  token: any;

  getToken(user: any): Observable<any> {
    return this.httpService.post(
      this.loginAppUrl + "token/generate-token",
      user
    );
  }

  authenticate(user:any): Observable<any>{
    return this.httpService.post(this.loginAppUrl +"authenticate",user);
  }

  getUser(id: any): Observable<any> {
    return this.httpService.get(this.loginAppUrl + "users/" + id);
  }

  getAllUser(): Observable<any> {
    return this.httpService.get(this.loginAppUrl + "users");
  }
}
