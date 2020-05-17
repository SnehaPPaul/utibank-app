import { Component, OnInit } from '@angular/core';
import {CommonService} from '../services/common.service'
import { LoginService } from '../services/login.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-addpayee',
  templateUrl: './addpayee.component.html',
  styleUrls: ['./addpayee.component.css']
})
export class AddpayeeComponent implements OnInit {

  constructor(private commonService:CommonService,private loginService:LoginService,private fb:FormBuilder) { }

  payee:FormGroup=this.fb.group({
    payeeEmailId:'',
    payeeFirstName:'',
    payeeLastName:'',
    userId:0
  });

  message:any='';

  

  ngOnInit() {
    this.message='';
  }

  addPayee(){
    console.log(this.payee.value);
    this.payee.value['userId']=this.loginService.user.id;
    this.commonService.addPayee(this.payee.value).subscribe(
      resp=>{
        if(resp){
          this.message='Payee Added succesfully';
          this.payee.reset();
        }else{
          this.message='Payee is not available';
        } 
      },
      error=>{
        this.message='Payee is not available';
      }
    );
  }

}
