import { Component, Input, OnInit } from '@angular/core';
import {ApiService} from './../../../services/api.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-mobile-view',
  templateUrl: './mobile-view.component.html',
  styleUrls: ['./mobile-view.component.css']
})
export class MobileViewComponent implements OnInit {
  @Input() list:any;
  constructor(private router:Router,private apiService:ApiService) { }

  ngOnInit(): void {
    console.log(this.list);
  }
  showDetails(item) {
    let flattenedItem=this.apiService.flattenObj(item);
    this.router.navigateByUrl('/showDetails',flattenedItem);
  }

}
