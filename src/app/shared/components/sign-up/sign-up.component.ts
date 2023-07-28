import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {


  user : any= []

  constructor() { }

  ngOnInit(): void {
  }


  submitSign(name , pass) {
    if ("user" in localStorage) {
      this.user = JSON.parse(localStorage.getItem("user")!)
      let exist = this.user.find((item: any) => name.target.value)
      if(exist) {
        alert("you are already a user");
      } else {
        this.user.push(name , pass);
        localStorage.setItem("user" , JSON.stringify(this.user));
      }
    }else {
      this.user.push(name , pass);
      localStorage.setItem("user" , JSON.stringify(this.user));
    }    
    
  }

}
