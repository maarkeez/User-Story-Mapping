import { Component, OnInit, Input } from '@angular/core';
import { Story } from '../model/usm-story.model';

@Component({
  selector: 'app-usm-story-grid',
  templateUrl: './usm-story-grid.component.html',
  styleUrls: ['./usm-story-grid.component.css']
})
export class UsmStoryGridComponent implements OnInit {

  @Input() storyGrid : Story[][];

  constructor() { }

  ngOnInit() {
  }

  public columnsStyle(): String {
  	var columnsStyle = "auto";
  	for (let row of this.storyGrid) {
	    columnsStyle = columnsStyle + " auto";
	}
	console.log("Style: " + columnsStyle);
  	return columnsStyle;
  }

}
