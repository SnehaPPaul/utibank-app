import { Injectable } from '@angular/core';
import { LoginService } from '../services/login.service';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenService implements HttpInterceptor{

  constructor(private loginService:LoginService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log("http request intercepted");
    console.log(request.url.endsWith('authenticate'));
    if(!request.url.endsWith('register') && !request.url.endsWith('authenticate')){
      console.log(this.loginService.token['token']);
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${this.loginService.token['token']}`
        }
      });
    }
   
    return next.handle(request);
  }
}
