import { Component, OnInit } from '@angular/core';
import { speakers } from 'src/app/providers/speakers';

@Component({
  selector: 'app-speakers-list',
  templateUrl: './speakers-list.component.html',
  styleUrls: ['./speakers-list.component.scss'],
})
export class SpeakersListComponent implements OnInit {
  speakers = speakers;

  constructor() {}

  ngOnInit() {}
}
