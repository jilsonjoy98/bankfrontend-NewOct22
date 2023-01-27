import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RegisterComponent } from './register/register.component';
import { TransactionsComponent } from './transactions/transactions.component';

const routes: Routes = [
  //login
  {
    path:'' ,component:LoginComponent
},
// register
{
  path:'register',component:RegisterComponent
},
// Dashboard
{
  path:'dashboard',component:DashboardComponent
},
// TransactionsComponent
{
  path:'transactions',component:TransactionsComponent
},
// PageNotFoundComponent
{
  path:'**', component:PageNotFoundComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
