import { Component, OnInit } from '@angular/core';
import { StoryColor } from '../model/usm-story-color.model';

@Component({
  selector: 'app-usm-color-picker',
  templateUrl: './usm-color-picker.component.html',
  styleUrls: ['./usm-color-picker.component.css']
})
export class UsmColorPickerComponent implements OnInit {

  private availableColors : StoryColor[] = [
    	new StoryColor("Big", "#4FBA92", "#47a783"),
  		new StoryColor("Medium", "#feffcb", "#e4e5b6"),
  		new StoryColor("Small", "#f8cc5d","#F8C74C"),
  		new StoryColor("User", "#CBEEED","#B6D6D5")
  ];

  constructor() { }

  ngOnInit() {
  }

  public getAvailableColors() : StoryColor[]{
  	return this.availableColors;
  }

  public dotStyle(storyColor: StoryColor): any {
  	return { 'background-color': storyColor.background };
  }

  public selectColor(storyColor: StoryColor) {
  	console.log("selected:");
  	console.log(storyColor.name);
  }

}
