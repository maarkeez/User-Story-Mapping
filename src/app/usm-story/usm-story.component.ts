import { CdkDragDrop, CdkDropList, CdkDrag } from '@angular/cdk/drag-drop';
import { Component, Input, OnInit } from '@angular/core';
import { Story } from '../model/usm-story.model';
import { UsmColorService } from '../usm-color.service';
import { UsmStoryService } from '../usm-story.service';
import { StoryCoordinates } from '../model/usm-story-coordinates.model';

@Component({
  selector: 'app-usm-story',
  templateUrl: './usm-story.component.html',
  styleUrls: ['./usm-story.component.css']
})
export class UsmStoryComponent implements OnInit {

  @Input() columnIndex: number;
  @Input() rowIndex: number;

  public onHover = false;

  constructor(private storyService: UsmStoryService, private usmColorService: UsmColorService) { }

  ngOnInit() { }

  public showStory(): boolean {
    return this.getStory() != null;
  }

  public addStory() {
    this.storyService.createEmptyStory(this.rowIndex, this.columnIndex);
  }

  public removeStory() {
    this.storyService.deleteStory(this.rowIndex, this.columnIndex);
  }

  public getStory(): Story {
    return this.storyService.getStory(this.rowIndex, this.columnIndex);
  }

  public editStory() {
    this.usmColorService.selectStory(this.rowIndex, this.columnIndex);
  }

  public defaultStyle(): any {
    return { 'background-color': this.storyService.getStory(this.rowIndex, this.columnIndex).color.background };
  }

  public onHoverStyle(): any {
    return { 'background-color': this.storyService.getStory(this.rowIndex, this.columnIndex).color.hover };
  }

  public getCoordinates(): StoryCoordinates {
    return new StoryCoordinates(this.columnIndex, this.rowIndex);
  }

  drop(event: CdkDragDrop<StoryCoordinates>) {
    const isOtherContainer = !(event.previousContainer === event.container);
    const currentContainerIsEmpty = !this.showStory();
    if ( isOtherContainer && currentContainerIsEmpty ) {

      const srcCoordinates = event.previousContainer.data;
      this.storyService.moveStory(srcCoordinates, this.getCoordinates());
    }
  }

}
