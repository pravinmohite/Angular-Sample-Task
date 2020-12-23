import { Component, Input, OnInit ,ViewChild} from '@angular/core';
import {ApiService} from './../../../services/api.service';
import {Router} from '@angular/router';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import {HttpClient} from '@angular/common/http';
import { AgGridAngular } from 'ag-grid-angular';
import 'ag-grid-enterprise';

@Component({
  selector: 'app-desktop-view',
  templateUrl: './desktop-view.component.html',
  styleUrls: ['./desktop-view.component.css']
})
export class DesktopViewComponent implements OnInit {
  @Input() list:any;
  @ViewChild('agGrid',{static:false}) agGrid:AgGridAngular;
  endPoint="https://jsonplaceholder.typicode.com/users";
  columnDefs=[ 
    { headerName:'UserName',field:'username',
      rowGroup:true
    },
  //  { headerName:'Email',field:'email',sortable:true,filter:true,checkboxSelection:true},
   // { headerName:'City',field:'city',sortable:true,filter:true},
  ];
  autoGroupColumnDef={
    headerName:'Email',
    field:'email',
    cellRenderer:'agGroupCellRenderer',
    cellRendererParams:{
      checkbox:true
    }
   }
   rowData:any;
  // rowData=[
  //   {username:'testUser',city:'testCity',email:'test@gmail.com'},
  //   {username:'testUser1',city:'testCity1',email:'test1@gmail.com'},
  //   {username:'testUser2',city:'testCity2',email:'test2@gmail.com'}
  // ]
  constructor(private apiService:ApiService,private router:Router,private http:HttpClient) { }

  ngOnInit(): void {
    this.rowData=this.http.get(this.endPoint);
  }
  
  sortBy(param) {
     this.apiService.sortBy(param);
  }

  showDetails(item) {
    let flattenedItem=this.apiService.flattenObj(item);
    this.router.navigateByUrl('/showDetails',flattenedItem);
  }

  getSelectedRows() {
    let selectedNodes=this.agGrid.api.getSelectedRows();
   alert(JSON.stringify(selectedNodes));
  }
}
