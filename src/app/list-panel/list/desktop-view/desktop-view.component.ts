import { Component, Input, OnInit } from '@angular/core';
import {ApiService} from './../../../services/api.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-desktop-view',
  templateUrl: './desktop-view.component.html',
  styleUrls: ['./desktop-view.component.css']
})
export class DesktopViewComponent implements OnInit {
  @Input() list:any;
  constructor(private apiService:ApiService,private router:Router) { }

  ngOnInit(): void {
    console.log(this.list);
  }
  
  sortBy(param) {
     this.apiService.sortBy(param);
  }

  showDetails(item) {
    let flattenedItem=this.apiService.flattenObj(item);
    this.router.navigateByUrl('/showDetails',flattenedItem);
  }
}
