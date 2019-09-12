import { Component, OnInit } from '@angular/core';
import { UsmStoryService } from '../usm-story.service';

@Component({
  selector: 'app-usm-story-grid-adder',
  templateUrl: './usm-story-grid-adder.component.html',
  styleUrls: ['./usm-story-grid-adder.component.css']
})
export class UsmStoryGridAdderComponent implements OnInit {

  constructor(public storyService: UsmStoryService) { }

  ngOnInit() { }

  public numberOfColumns(): any {
    let gridTemplateColumns = 'auto';
    for (let i = 1; i < this.storyService.getNumberOfColumns(); i++) {
      gridTemplateColumns = gridTemplateColumns + ' auto';
    }
    return { 'grid-template-columns': gridTemplateColumns };
  }

  public addColumntOnRightOf(column: number) {
      this.storyService.addColumntOnRightOf(column);
  }

  public addColumntOnLeftOf(column: number) {
    this.storyService.addColumntOnLeftOf(column);
  }

  public addRowDownOf(row: number) {
    this.storyService.addRowDownOf(row);
  }

  public addRowAboveOf(row: number) {
    this.storyService.addRowAboveOf(row);
  }

}
