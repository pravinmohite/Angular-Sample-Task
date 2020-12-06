import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  detailList:any;
  endPoint="https://jsonplaceholder.typicode.com/users";
  private data=new BehaviorSubject(null);
  currentData=this.data.asObservable();
  constructor(private http:HttpClient) {
     this.getDetails();
   }

   getDetails() {
     this.http.get(this.endPoint).subscribe(response=>{
        this.detailList=response;
        this.data.next(response);
     })
   }

   sortBy(param) {
    this.detailList.sort((a,b)=>{
      if(a[param]>b[param]) {
          return 1
          } 
          else if(a[param]<b[param]) {
          return -1;
          }
          return 0; 
      })
      this.data.next(this.detailList);
   }
   
   searchByUsernameEmail=(searchedString)=>{
    if(searchedString.trim()=="") {
        this.data.next(this.detailList)
    }
    else {
       let temporaryDetalList=this.detailList.filter((item)=>{
        if(item.username.toUpperCase().indexOf(searchedString.toUpperCase())>-1 || item.email.toUpperCase().indexOf(searchedString.toUpperCase())>-1)
            return true;
        else
            return false;  
        })
        this.data.next(temporaryDetalList);
   }
 }

 flattenObj(obj,result={}) {
  for(let item in obj) {
    if(typeof obj[item]=="object") {
        this.flattenObj(obj[item],result);
    }
    else {
          result[item]=obj[item];
      }
  }
  return result;
 }
}
