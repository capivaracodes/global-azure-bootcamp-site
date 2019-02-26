import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpeakersComponent } from './speakers.component';
import { SpeakersListComponent } from './speakers-list/speakers-list.component';
import { SpeakerDetailComponent } from './speaker-detail/speaker-detail.component';

@NgModule({
  declarations: [
    SpeakersComponent,
    SpeakersListComponent,
    SpeakerDetailComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SpeakersListComponent
  ]
})
export class SpeakersModule { }
