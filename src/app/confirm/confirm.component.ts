import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<ConfirmComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
   
  ){
    if(this.data.isTransferred){
      this.message="Money Transferred successfully";
      this.color="green";
    }else{
      this.message="Might be Insufficient Funds";
      this.color="red";
    }
  }


  message='';
  color=''

  ngOnInit() {
  }

  cancel(){
    this.dialogRef.close();
  }

}
