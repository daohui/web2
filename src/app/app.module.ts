import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material'
import { RouterModule } from '@angular/router'
import { CdkTable } from '@angular/cdk'


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { routerConfig } from './route-config'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    RouterModule.forRoot(routerConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
