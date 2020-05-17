import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';
import { LoginService } from '../services/login.service';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

  constructor(private commonService:CommonService,private loginService:LoginService) { }

  ngOnInit() {
    this.commonService.getTransaction(this.loginService.user.id).subscribe(
      resp=>{
        console.log(resp);
        this.dataSource = new MatTableDataSource(resp);
        ;
      }
    )
  }

  dataSource:any;
  displayedColumns: string[] = ['accountNumber', 'emailId','amount','transactionDate'];

}
