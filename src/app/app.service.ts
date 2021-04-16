import { Injectable } from "@angular/core";
import { IApp } from "./app";

@Injectable()
export class AppService{
private appEmployee:IApp[]=[
    
        { id:'1',
            username:'admin',
            role:' admin',
            contactpreference:'phone',
            gender:'Female',
            email:'abc@gmail.com'
        },
        { id:'2',
            username:'manager',
            role:'manager',
            contactpreference:'phone',
            gender:'Female',
            email:'xyz@gmail.com'
        },
        { id:'3',
            username:'employee',
            role:'employee',
            contactpreference:'phone',
            gender:'Female',
            email:'pqr@gmail.com'
        }


    ]
}

