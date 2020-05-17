import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  baseUrl: string = "http://localhost:7070/";

  constructor(private httpClient:HttpClient,private loginService:LoginService) { }

  getAccounts(userId:any):Observable<any>{
    // console.log(this.loginService.token['token']);
    // const headers = new HttpHeaders({
    //   'Content-Type': 'application/json',
    //   'Authorization': 'Bearer '+this.loginService.token['token']
    // })
    return this.httpClient.get(this.baseUrl+"account/user/"+userId+"?authorization=Bearer "+this.loginService.token['token']);
  
  }


  transfer(transferData):Observable<any>{
    return this.httpClient.post(this.baseUrl+"transfer"+"?authorization=Bearer "+this.loginService.token['token'],transferData);
  }

  addPayee(payee):Observable<any>{
    return this.httpClient.post(this.baseUrl+"payee"+"?authorization=Bearer "+this.loginService.token['token'],payee);
  }

  getPayees(userId):Observable<any>{
    return this.httpClient.get(this.baseUrl+"payee/"+userId+"?authorization=Bearer "+this.loginService.token['token']);
  }

  getTransaction(accntId):Observable<any>{
    return this.httpClient.get(this.baseUrl+"transaction/"+accntId+"?authorization=Bearer "+this.loginService.token['token']);
  }
}
