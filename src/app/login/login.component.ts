import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private apiService:ApiService,private router:Router) { }
   login:any={username:"",password:""};

  ngOnInit(): void {
    if(localStorage.getItem('loggedIn')=="true") {
      this.router.navigateByUrl('/list');
    }
  }

  loginToApplication() {
    console.log(this.login)
    if(this.login.username=="admin" && this.login.password=="admin") {
      localStorage.setItem('loggedIn','true');
      this.router.navigateByUrl('/list');
    }
  }
  keyPressEvent(event) {
    if(event.keyCode==13) {
      this.loginToApplication();
    }
  }

}
