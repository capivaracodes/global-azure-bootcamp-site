import { Component, OnInit } from '@angular/core';
import { talks } from 'src/app/providers/talks';

@Component({
  selector: 'app-talks',
  templateUrl: './talks.component.html',
  styleUrls: ['./talks.component.scss'],
})
export class TalksComponent implements OnInit {
  talks = talks;
  constructor() {}

  ngOnInit() {}
}
