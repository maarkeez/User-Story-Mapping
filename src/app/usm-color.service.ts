import { Injectable } from '@angular/core';
import { StoryColor } from './model/usm-story-color.model';
import { Story } from './model/usm-story.model';
import { UsmStoryService } from './usm-story.service';

@Injectable({
  providedIn: 'root'
})
export class UsmColorService {

  private isSelected: boolean;
  private rowIndex: number;
  private columnIndex: number;

  private availableColors : StoryColor[] = [
    	new StoryColor("Big", "#4FBA92", "#47a783"),
  		new StoryColor("Medium", "#feffcb", "#e4e5b6"),
  		new StoryColor("Small", "#f8cc5d","#C6A34A"),
  		new StoryColor("User", "#CBEEED","#B6D6D5")
  ];

  constructor(private storyService: UsmStoryService) { }

  public getAvailableColors() : StoryColor[]{
  	return this.availableColors;
  }

  public selectStory(rowIndex: number, columnIndex: number){
    this.rowIndex = rowIndex;
    this.columnIndex = columnIndex;
    this.isSelected = true;
  }

  public hasSelectedStory(): boolean {
    return this.isSelected;
  }

  public clear(){
    this.clearStory();
  }

  public selectColor(color: StoryColor){
    this.storyService.getStory(this.rowIndex, this.columnIndex).color = color;
  }

  private clearStory(){
    this.isSelected = false;
  }
  
}
