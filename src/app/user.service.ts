import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  value=[
    {
      email:"sanj@gmail.com",password:"Sanjeev_456"
    }
  ];
  length: number;
  get (){
    return this.value;
  }
  set(userDetails:any){
    let sample = {
      email:userDetails.email,password:userDetails.password
    }
    this.value.push(sample);
    console.log("new value",this.value);
 
  }
  constructor() { }
}
