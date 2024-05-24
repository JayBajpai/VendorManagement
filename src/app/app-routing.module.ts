import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesComponent } from './employees/employees.component';
import { VendorsComponent } from './vendors/vendors.component';
import { EmailsComponent } from './emails/emails.component';

const routes: Routes = [
  { path: 'employee', component: EmployeesComponent },
  { path: 'vendor', component: VendorsComponent},
  { path: 'email', component: EmailsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
