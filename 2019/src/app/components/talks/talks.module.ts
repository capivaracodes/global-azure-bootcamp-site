import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TalksComponent } from './talks.component';

@NgModule({
  declarations: [TalksComponent],
  imports: [
    CommonModule
  ],
  exports: [TalksComponent]
})
export class TalksModule { }
