import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { Routes, RouterModule } from '@angular/router';
import { SpeakersModule } from '../speakers/speakers.module';

const routes: Routes = [{
  path: '',
  component: HomeComponent
}];

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    SpeakersModule,
    RouterModule.forChild(routes)
  ]
})
export class HomeModule { }
