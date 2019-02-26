import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Gab2019Component } from './layouts/gab2019/gab2019.component';
import { BlankComponent } from './layouts/blank/blank.component';

@NgModule({
  declarations: [
    AppComponent,
    Gab2019Component,
    BlankComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
