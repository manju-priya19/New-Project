import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService} from './login.service';
import { Router} from '@angular/router';
import { IEmployee} from './login';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  {
      employee:IEmployee={
    
        username:'',
        role:'',
        contactpreference:'',
        email:'',
        password:''

      }
      // employee!:IEmployee;
      constructor(private _loginService: LoginService,private route:Router) { }
 
   onSubmit(){
    // this._loginService.getEmployees().subscribe(
    //   (response)=>{
    //   console.log(response);
    // });

  this._loginService.getEmployee(this.employee.username,this.employee.password).subscribe(
    (response) =>
    {
      if (!response)
      {
        window.alert("Username or Password Incorrect ")
        return;
      }
      else{
        
        this.employee=response;
        var Role:string=this.employee.role;
        switch(Role){
          case "admin":
            this.route.navigate(["/admin"]);
            break;
          case "manager":
            this.route.navigate(["/manager"]);
            break;
          case "employee":
            this.route.navigate(["/employee"]);
            break;
          default:
            window.alert("Invalid");
            break;
        }

      }
    },
    (err) => console.log(err)
    );
}
}
