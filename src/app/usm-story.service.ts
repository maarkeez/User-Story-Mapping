import { Injectable } from '@angular/core';
import { Story } from './model/usm-story.model';
import { StoryColor } from './model/usm-story-color.model';
import { StoryCoordinates } from './model/usm-story-coordinates.model';

@Injectable({
  providedIn: 'root'
})
export class UsmStoryService {

  private defaultColor = new StoryColor('Yellow', '#feffcb', '#e4e5b6');
  private columns = 10;
  private rows = 10;
  private stories: Story[][];

  constructor() {
    this.load([]);
  }

  public load(stories: Story[][]) {
    this.stories = stories;
    this.fillWithEmptyStories();
  }

  public getNumberOfColumns(): number {
    return this.columns;
  }

  public getStory(rowIndex: number, columnIndex: number): Story {
    return this.stories[rowIndex][columnIndex];
  }

  public createEmptyStory(rowIndex: number, columnIndex: number) {
    return this.stories[rowIndex][columnIndex] = new Story('', this.defaultColor);
  }

  public deleteStory(rowIndex: number, columnIndex: number) {
    return this.stories[rowIndex][columnIndex] = null;
  }

  public moveStory(srcCoordinates: StoryCoordinates, destCoordinates: StoryCoordinates) {
    const story = this.getStory(srcCoordinates.row, srcCoordinates.column);
    this.deleteStory(srcCoordinates.row, srcCoordinates.column);
    this.stories[destCoordinates.row][destCoordinates.column] = story;
  }

  public editColor(rowIndex: number, columnIndex: number) {
    return this.stories[rowIndex][columnIndex] = null;
  }

  public getStories(): Story[][] {
    return this.stories;
  }

  public addColumntOnLeftOf(columnIndex: number) {
      this.columns++;
      this.fillWithEmptyStories();
      this.moveColumnsToRightSince(columnIndex);
  }
  private moveColumnsToRightSince(columnIndex: number) {
      for (let column = this.columns - 1; column >= columnIndex ; column--) {
        for (let row = 0; row < this.rows; row++) {
          const story = this.getStories()[row][column];
          if (story) {
            this.getStories()[row][column + 1] = story;
            this.deleteStory(row, column);
          }
        }
      }
  }

  private fillWithEmptyStories() {
    const missingRows = this.rows - this.getStories().length;
    for (let i = 0; i < missingRows; i++) {
        this.getStories().push([]);
    }

    for (let row = 0; row < this.getStories().length; row++) {
      const missingStories = this.columns - this.getStories()[row].length;

      for (let i = 0; i < missingStories; i++) {
        this.getStories()[row].push(null);
      }
    }
  }
}
