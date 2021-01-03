import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './partial_views/header/header.component';
import { SearchComponent } from './search-panel/search/search.component';
import { MetaDataComponent } from './meta-data-panel/meta-data/meta-data.component';
import { ListComponent } from './list-panel/list/list.component';
import { MobileViewComponent } from './list-panel/list/mobile-view/mobile-view.component';
import { DesktopViewComponent } from './list-panel/list/desktop-view/desktop-view.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DetailViewComponent } from './detail-view/detail-view.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    MetaDataComponent,
    ListComponent,
    MobileViewComponent,
    DesktopViewComponent,
    LoginComponent,
    DetailViewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
