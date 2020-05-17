import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private formBuilder:FormBuilder,private userService:UserService,private router:Router ) { }

  user:FormGroup=this.formBuilder.group(
    {
      "firstName":'',
      "lastName":"",
      "password":'',
      "email":'',
      "mobileNo":''
    }
  )

  message:any=''


  ngOnInit() {
  }

  register(){
    
    this.userService.register(this.user.value).subscribe(
      resp=>{
        this.message='';
        console.log(resp);
        this.router.navigate(['/login']);
      },error=>{
        this.message="email already exists"
      }
    );
  }

}
