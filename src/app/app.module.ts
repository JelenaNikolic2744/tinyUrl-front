import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AllUrlsComponent } from './admin/allUrls/allUrls.component';
import { TinyUrlComponent } from './tiny-url/tiny-url.component';
import { HeaderComponent } from './header/header.component';
import { RoutingModule } from './routing.module';
import { HttpClientModule } from '@angular/common/http';
import { APIService } from './api.service';
import { FormsModule } from '@angular/forms';
import { AlertComponent } from './alert/alert.component';
import { UrlComponent } from './admin/allUrls/url/url.component';
import { AdminService } from './admin/allUrls/admin.service';

@NgModule({
  declarations: [
    AppComponent,
    AllUrlsComponent,
    TinyUrlComponent,
    HeaderComponent,
    AlertComponent,
    UrlComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [APIService, AdminService],
  bootstrap: [AppComponent]
})
export class AppModule { }
