<<<<<<< HEAD
import { Component } from '@angular/core';
=======
import { Component, OnInit } from '@angular/core';
import { IApp } from "./app";
import { AppService} from './app.service';
>>>>>>> d954fc91f16aba5ec5ddefd6b9bf25a2f0193152
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers:[AppService]
})
<<<<<<< HEAD
export class AppComponent {
 
  constructor()
  {

  }
 
=======
export class AppComponent implements OnInit {
  title = 'padma';
   
  employees: IApp[]=[];
  constructor(private _appService:AppService){

  }
  ngOnInit(){
    
  }
>>>>>>> d954fc91f16aba5ec5ddefd6b9bf25a2f0193152

}
