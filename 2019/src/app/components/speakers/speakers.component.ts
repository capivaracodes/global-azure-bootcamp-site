import { Component, OnInit } from '@angular/core';
import { speakers } from 'src/app/providers/speakers';

@Component({
  selector: 'app-speakers',
  templateUrl: './speakers.component.html',
  styleUrls: ['./speakers.component.scss']
})
export class SpeakersComponent implements OnInit {

  speakers = speakers;

  constructor() { }

  ngOnInit() {
  }

}
