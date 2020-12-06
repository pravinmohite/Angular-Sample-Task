import { Component, OnInit } from '@angular/core';
import {ApiService} from './../../services/api.service';

@Component({
  selector: 'app-meta-data',
  templateUrl: './meta-data.component.html',
  styleUrls: ['./meta-data.component.css']
})
export class MetaDataComponent implements OnInit {
  metaDataItem:any;
  constructor(private apiService:ApiService) { }

  ngOnInit(): void {
    this.apiService.currentData.subscribe((data)=>{
      if(data && !this.metaDataItem) {
        this.metaDataItem=this.apiService.flattenObj(data[0]);
      }
    });
  }

}

