import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ApiService} from './../../services/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLoggedIn=localStorage.getItem('loggedIn')?true:false;
  constructor(private router:Router,private apiService:ApiService) { }

  ngOnInit(): void {
    this.apiService.currentLoginStatus.subscribe(data=>{
      this.isLoggedIn=data;
    })
  }
  
  logout() {
    this.apiService.changeLoggedInStatus(false);
    this.router.navigateByUrl('/');
  }
}
