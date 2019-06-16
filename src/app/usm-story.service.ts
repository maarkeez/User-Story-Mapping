import { Injectable } from '@angular/core';
import { Story } from './model/usm-story.model';
import { StoryColor } from './model/usm-story-color.model';

@Injectable({
  providedIn: 'root'
})
export class UsmStoryService {

  private defaultColor = new StoryColor("Yellow", "#feffcb", "#e4e5b6");
  private columns : number = 10;
  private rows : number = 10;
  private stories : Story[][];

  constructor() { 
  	this.load([]);
  }

  public load(stories: Story[][]){
    this.stories = stories;
    this.fillWithEmptyStories();
  }

  public getNumberOfColumns() : number {
  	return this.columns;
  }

  public getStory(rowIndex: number, columnIndex: number) {
  	return this.stories[rowIndex][columnIndex];
  }

  public createEmptyStory(rowIndex: number, columnIndex: number) {
  	return this.stories[rowIndex][columnIndex] = new Story("", this.defaultColor);
  }

  public deleteStory(rowIndex: number, columnIndex: number) {
  	return this.stories[rowIndex][columnIndex] = null;
  }

  public editColor(rowIndex: number, columnIndex: number) {
    return this.stories[rowIndex][columnIndex] = null;
  }

  public getStories() : Story[][] {
  	return this.stories;
  }

  private fillWithEmptyStories(){
    var missingRows = this.rows - this.getStories().length;
    for (let i = 0; i < missingRows; i++) {
        this.getStories().push([]);
    }

    for (let row = 0; row < this.getStories().length; row++) {
      var missingStories = this.columns - this.getStories()[row].length;
      
      for (let i = 0; i < missingStories; i++) {
        this.getStories()[row].push(null);
      }
    }
  }
}
