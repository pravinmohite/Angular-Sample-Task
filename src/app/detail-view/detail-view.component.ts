import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.css']
})
export class DetailViewComponent implements OnInit {
  currentItem:any;
  constructor(private router: Router) { 
    this.currentItem=this.router.getCurrentNavigation().extras;
  }

  ngOnInit(): void {
  }
  
  goBack() {
    this.router.navigateByUrl('/list');
  }
}
