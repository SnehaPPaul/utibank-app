import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonService } from './common.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl: string = this.commonService.baseUrl;

  constructor(private http:HttpClient,private commonService:CommonService) { }

  register(user:any):Observable<any>{
    return this.http.post(this.baseUrl+"register",user);
  }
}
