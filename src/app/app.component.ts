import { Component, OnInit } from '@angular/core';
import { IApp } from "./app";
import { AppService} from './app.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers:[AppService]
})
export class AppComponent implements OnInit {
  title = 'padma';
   
  employees: IApp[]=[];
  constructor(private _appService:AppService){

  }
  ngOnInit(){
    
  }

}
