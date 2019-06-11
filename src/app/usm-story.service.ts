import { Injectable } from '@angular/core';
import { Story } from './model/usm-story.model';

@Injectable({
  providedIn: 'root'
})
export class UsmStoryService {

  private columns : number = 10;
  private rows : number = 10;
  private stories : Story[][] = [];

  constructor() { 
  	this.fillWithEmptyStories();
  }

  public getNumberOfColumns() : number {
  	return this.columns;
  }

  public getStory(rowIndex: number, columnIndex: number) {
  	return this.stories[rowIndex][columnIndex];
  }

  public createEmptyStory(rowIndex: number, columnIndex: number) {
  	return this.stories[rowIndex][columnIndex] = new Story("");
  }

  public deleteStory(rowIndex: number, columnIndex: number) {
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
