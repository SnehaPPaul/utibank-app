import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormControl } from '@angular/forms';
import { CommonService } from '../services/common.service';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<TransferComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private commonService:CommonService,
    private loginService:LoginService
  ) { 
    console.log(this.data.accountDetails);
    this.commonService.getPayees(this.loginService.user.id).subscribe(resp=>{
      console.log(resp);
      this.payees=resp;
    })
  }

  color:string="red";
  message='';

  ngOnInit() {
    this.message='';
  }

  selectedAccount:any='';
  money:number;

  transferDetails:any={
    accountIdFrom:0,
    accountIdTo:this.selectedAccount.accntId,
    money:this.money,
    userId:this.loginService.user.id
  }


  payees:any=[];
  

    cancel(){
      this.dialogRef.close();
    }


    transfer(){
      if(this.transferDetails.money>0){
        this.transferDetails.accountIdFrom=this.data.accountDetails.accId
        console.log(this.transferDetails);
         this.commonService.transfer(this.transferDetails).subscribe(
           resp=>{
             this.dialogRef.close({"isTransferred":true});
           },error=>{
             this.dialogRef.close({"isTransferred":false});
           }
           )
       
      }else{
        this.message="Invalid Amount";
        
      }
     
    }

}
