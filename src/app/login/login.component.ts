import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {BehaviorSubject} from 'rxjs';
import { ApiService } from '../services/api.service';
import { FormGroup, FormControl,FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

   loginForm:FormGroup;
   isSubmitted:boolean=false;
   invalidCredentials:boolean=false;
  constructor(private apiService:ApiService,private router:Router,private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.initialiseForm();
    if(localStorage.getItem('loggedIn')=="true") {
      this.router.navigateByUrl('/list');
    }
  }

  initialiseForm() {
    this.loginForm=this.formBuilder.group({
      username:['',Validators.required],
      password:['',Validators.required]
    })
  }

  loginToApplication() {
    this.isSubmitted=true;
    if(this.loginForm.controls.username.value=="admin" && this.loginForm.controls.password.value=="admin") {
      this.apiService.changeLoggedInStatus(true);
      this.router.navigateByUrl('/list');
    }
    else {
      this.invalidCredentials=true;
    }
  }
  keyPressEvent(event) {
    if(event.keyCode==13) {
      this.loginToApplication();
    }
  }

}
