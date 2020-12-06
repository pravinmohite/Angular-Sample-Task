import { Component, OnInit } from '@angular/core';
import {ApiService} from './../../services/api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchString:String;
  selectedValue:String;
  constructor(private apiService:ApiService) { }

  ngOnInit(): void {
    this.selectedValue="username";
  }
  searchByUsernameEmail()
  {
     this.apiService.searchByUsernameEmail(this.searchString);
  }
  sortBy() {
    this.apiService.sortBy(this.selectedValue)
  }
}
