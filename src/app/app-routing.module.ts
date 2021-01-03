import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule , Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ListComponent } from './list-panel/list/list.component';
import { DetailViewComponent } from './detail-view/detail-view.component';
import {AuthguardService} from './services/authGuard/authguard.service';

let routes: Routes = [
{
    path: "", 
    component:LoginComponent
  },
  {
      path:'list',
      component:ListComponent,
      canActivate:[AuthguardService]
  },
  {
      path:'showDetails',
      component:DetailViewComponent,
      canActivate:[AuthguardService]
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