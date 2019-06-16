import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Story } from '../model/usm-story.model';
import { UsmStoryService } from '../usm-story.service';
import { UsmColorService } from '../usm-color.service';

@Component({
  selector: 'app-usm-story',
  templateUrl: './usm-story.component.html',
  styleUrls: ['./usm-story.component.css']
})
export class UsmStoryComponent implements OnInit {

  @Input() columnIndex: number;
  @Input() rowIndex: number;

  private openMenu : boolean = false;
  public onHover : boolean = false;

  constructor(private storyService: UsmStoryService, private usmColorService: UsmColorService) { }

  ngOnInit() { }

  public showStory() : boolean {
  	return this.getStory() != null;
  }

  public addStory() {
  	this.storyService.createEmptyStory(this.rowIndex, this.columnIndex);
  }

  public removeStory() {
    this.storyService.deleteStory(this.rowIndex, this.columnIndex);
  }

  public getStory() : Story {
    return this.storyService.getStory(this.rowIndex, this.columnIndex);
  }

  public editStory(){
    this.usmColorService.selectStory(this.rowIndex, this.columnIndex);
  }

  public defaultStyle(): any {
    return { 'background-color': this.storyService.getStory(this.rowIndex, this.columnIndex).color.background };
  }

  public onHoverStyle(): any {
    return { 'background-color': this.storyService.getStory(this.rowIndex, this.columnIndex).color.hover };
  }

}
