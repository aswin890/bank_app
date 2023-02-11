import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  acno:any
  pswrd:any
  op='your perfect banking partner' 
  data='enter account_no'

  userDetails:any={
    1000:{account_no:1000,username:"amal",password:123,balance:0},
    1001:{account_no:1001,username:"anu",password:123,balance:0},
    1002:{account_no:1002,username:"arun",password:123,balance:0},
    1003:{account_no:1003,username:"mega",password:123,balance:0}
  }
  constructor() {}

  ngOnInit(): void{

  }

  login(){
    var acno=this.acno
    var pswrd=this.pswrd
    var userDetails=this.userDetails

    if(acno in userDetails){
     if(pswrd==userDetails[acno]['password']){
      alert('login success')
     }
     else{
      alert('incorrect password')
     }
    }
    else{
      alert('invalid user')
    }
  }

  acnoChange(event:any){
this.acno=event.target.value
  }

  pswChange(event:any){
    this.pswrd=event.target.value
  }
}
