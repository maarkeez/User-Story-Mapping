import { Component, OnInit, Input } from '@angular/core';
import { Story } from '../model/usm-story.model';

@Component({
  selector: 'app-usm-story-grid',
  templateUrl: './usm-story-grid.component.html',
  styleUrls: ['./usm-story-grid.component.css']
})
export class UsmStoryGridComponent implements OnInit {

  private columns : int = 10;
  private rows : int = 10;

  @Input() storyGrid : Story[][];

  constructor() {

   }

  ngOnInit() {
    this.fillWithEmptyStories();
  }

  fillWithEmptyStories(){
    var missingRows = this.rows - this.storyGrid.length;
    for (let i = 0; i < missingRows; i++) {
        this.storyGrid.push([]);
    }

    for (let row = 0; row < this.storyGrid.length; row++) {
      var missingStories = this.columns - this.storyGrid[row].length;
      
      for (let i = 0; i < missingStories; i++) {
        this.storyGrid[row].push(null);
      }
    }
  }
  public numberOfColumns(): any {
  	var gridTemplateColumns = "auto";
  	for (let i = 1; i < this.columns; i++) {
	    gridTemplateColumns = gridTemplateColumns + " auto";
	  }
	  console.log("Style: " + gridTemplateColumns);
  	return { 'grid-template-columns': gridTemplateColumns };
  }

}
