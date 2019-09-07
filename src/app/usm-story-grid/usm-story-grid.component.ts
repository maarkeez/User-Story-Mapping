import { Component, OnInit } from '@angular/core';
import { UsmStoryService } from '../usm-story.service';

@Component({
  selector: 'app-usm-story-grid',
  templateUrl: './usm-story-grid.component.html',
  styleUrls: ['./usm-story-grid.component.css']
})
export class UsmStoryGridComponent implements OnInit {

  constructor(public storyService: UsmStoryService) { }

  ngOnInit() { }

  public numberOfColumns(): any {
    let gridTemplateColumns = 'auto';
    for (let i = 1; i < this.storyService.getNumberOfColumns(); i++) {
      gridTemplateColumns = gridTemplateColumns + ' auto';
    }
    return { 'grid-template-columns': gridTemplateColumns };
  }

}
