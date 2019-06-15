import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsmColorService {

  private availableColors : StoryColor[] = [
    	new StoryColor("Big", "#4FBA92", "#47a783"),
  		new StoryColor("Medium", "#feffcb", "#e4e5b6"),
  		new StoryColor("Small", "#f8cc5d","#F8C74C"),
  		new StoryColor("User", "#CBEEED","#B6D6D5")
  ];

  constructor() { }

  public getAvailableColors() : StoryColor[]{
  	return this.availableColors;
  }
  
}
