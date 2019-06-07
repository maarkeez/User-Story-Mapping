import { Component, OnInit, Input } from '@angular/core';
import { Story } from '../model/usm-story.model';

@Component({
  selector: 'app-usm-story-grid',
  templateUrl: './usm-story-grid.component.html',
  styleUrls: ['./usm-story-grid.component.css']
})
export class UsmStoryGridComponent implements OnInit {

  @Input() stories : Story[];

  constructor() { }

  ngOnInit() {
  }

}
