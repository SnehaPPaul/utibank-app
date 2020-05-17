import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { AuthGuardService } from "./services/auth-guard.service";
import { LoginComponent } from "./login/login.component";
import { AccountsComponent } from './accounts/accounts.component';
import { TransferComponent } from './transfer/transfer.component';
import { RegisterComponent } from './register/register.component';
import { AddpayeeComponent } from './addpayee/addpayee.component';
import { TransactionComponent } from './transaction/transaction.component';

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "accounts", component: AccountsComponent,canActivate: [AuthGuardService] },
  { path: "transactions", component: TransactionComponent,canActivate: [AuthGuardService] },
  { path: "addPayee", component: AddpayeeComponent,canActivate: [AuthGuardService] },
  { path: "", redirectTo: "accounts", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
