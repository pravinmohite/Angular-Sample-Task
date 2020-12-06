import { Component, OnInit } from '@angular/core';
import {ApiService} from './../../services/api.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  detailList:any;
  constructor(private apiService:ApiService) { }

  ngOnInit(): void {
    this.apiService.currentData.subscribe((data)=>{
      this.detailList=data;
    });
  }

}
