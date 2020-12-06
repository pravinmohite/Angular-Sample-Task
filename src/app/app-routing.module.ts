import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule , Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ListComponent } from './list-panel/list/list.component';
import { DetailViewComponent } from './detail-view/detail-view.component';

let routes: Routes = [
{
    path: "", 
    component:LoginComponent
  },
  {
      path:'list',
      component:ListComponent
  },
  {
      path:'showDetails',
      component:DetailViewComponent
  }
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes,{ useHash: true })
  ],
  exports: [RouterModule]

})
export class AppRoutingModule { }