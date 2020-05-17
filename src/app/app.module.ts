import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from './register/register.component';


import { MatToolbarModule, MatIconModule, MatSidenavModule, 
  MatListModule, MatButtonModule, MatInputModule, MatSelectModule,
  MatCardModule,MatDialogModule,MatTableModule } from  '@angular/material';
import { AccountsComponent } from './accounts/accounts.component';
import { TransferComponent } from './transfer/transfer.component';
import { TokenService } from './interceptors/token.service';
import { AddpayeeComponent } from './addpayee/addpayee.component';
import { TransactionComponent } from './transaction/transaction.component';
import { ConfirmComponent } from './confirm/confirm.component';


@NgModule({
  declarations: [AppComponent, LoginComponent, HomeComponent, RegisterComponent, AccountsComponent, 
   TransferComponent, AddpayeeComponent, TransactionComponent, ConfirmComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    MatDialogModule,
    MatTableModule
  ],
  providers: [
    {
      provide : HTTP_INTERCEPTORS,
      useClass: TokenService,
      multi: true
    }
  ],
  entryComponents: [TransferComponent,ConfirmComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
