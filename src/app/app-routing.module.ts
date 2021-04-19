import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { EmployeeComponent } from './employee/employee.component';
import { ManagerDashboardComponent } from './manager-dashboard/manager-dashboard.component';
import { ManagerComponent } from './manager/manager.component';
import { ProfileComponent } from './profile/profile.component';
import { AdminDashboardComponent} from './admin-dashboard/admin-dashboard.component'
import { EmployeeDashboardComponent} from './employee-dashboard/employee-dashboard.component'
import { CreateprojectComponent } from './createproject/createproject.component';
import { CreatetaskComponent } from './createtask/createtask.component';
import { ViewprojectComponent } from './viewproject/viewproject.component';
import { AssignprojectComponent } from './assignproject/assignproject.component';
import {CompletionComponent} from './completion/completion.component';
import {AdminreportComponent} from './adminreport/adminreport.component';
import {ManagerreportComponent} from './managerreport/managerreport.component'
const routes: Routes = [
  {
    path:'admin',component:AdminComponent,
    children: [
      { path:'',component:AdminDashboardComponent},
      {path: 'admindashboard', component:AdminDashboardComponent },
      {path: 'profile', component:ProfileComponent },
      {path: 'assignproject', component:AssignprojectComponent },
      {path: 'adminreport', component:AdminreportComponent },
      {path: 'completion', component:CompletionComponent },  
    ]
  },
 
  
{
  path: 'manager',component: ManagerComponent,
  children: [
    { path:'',component:ManagerDashboardComponent},
    {path: 'managerdashboard', component:ManagerDashboardComponent },
    {path:'profile',component:ProfileComponent},
    {path:'newproject',component:CreateprojectComponent},
    {path:'newtask',component:CreatetaskComponent },
    {path:'viewproject',component:ViewprojectComponent},
    {path:'managerreport',component:ManagerreportComponent}
  ]
},


{
  path:'employee',component:EmployeeComponent,
  children: [
    { path:'',component:EmployeeDashboardComponent},
    {path: 'employeedashboard', component:EmployeeDashboardComponent },
    {path: 'profile', component:ProfileComponent },
  ]
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
