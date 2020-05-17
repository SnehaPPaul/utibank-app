import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { TransferComponent } from '../transfer/transfer.component';
import { CommonService } from '../services/common.service';
import { LoginService } from '../services/login.service';
import { ConfirmComponent } from '../confirm/confirm.component';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {


  accounts :any=[];

  constructor(public dialog: MatDialog,private commonService:CommonService,private loginService:LoginService) { }

  ngOnInit() {
    console.log(this.loginService.user.id);
    this.getAccounts();
  }

  getAccounts(){
    this.commonService.getAccounts(this.loginService.user.id).subscribe(
      resp=>{
        console.log(resp);
        this.accounts=resp;
      }
    )
  }

  transfer(account){
    console.log(account);
    const dialogRef = this.dialog.open(TransferComponent, {
      width: "550px",
      panelClass: "myapp-no-padding-dialog",
      data:{accountDetails : account}
    });

    dialogRef.afterClosed().subscribe(
      result => { 
        console.log(result);
        const dialogRef = this.dialog.open(ConfirmComponent, {
          width: "550px",
          panelClass: "myapp-no-padding-dialog",
          data:result
        });

        dialogRef.afterClosed().subscribe(
          resp=>{
            this.getAccounts();
          }
        );
        
       }
      );

  }

}
