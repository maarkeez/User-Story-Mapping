import { Component, OnInit } from '@angular/core';
import { StoryColor } from '../model/usm-story-color.model';
import { UsmColorService } from '../usm-color.service';

@Component({
  selector: 'app-usm-color-picker',
  templateUrl: './usm-color-picker.component.html',
  styleUrls: ['./usm-color-picker.component.css']
})
export class UsmColorPickerComponent implements OnInit {

  constructor(private usmColorService: UsmColorService) { }

  ngOnInit() { }

  public isOpen() : boolean{
    return this.usmColorService.hasSelectedStory();
  }

  public close() {
    this.usmColorService.clear();
  }

  public getAvailableColors() : StoryColor[]{
  	return this.usmColorService.getAvailableColors();
  }

  public dotStyle(storyColor: StoryColor): any {
  	return { 'background-color': storyColor.background };
  }

  public selectColor(storyColor: StoryColor) {
    this.usmColorService.selectColor(storyColor);
    this.usmColorService.clear();
  }

  public isSelected(color: StoryColor){
    
    var isSelectedAux =  this.usmColorService.isSelectedColor(color);
    console.log( color.name + ", Is selected? " + isSelectedAux);
    return isSelectedAux;
  }

  public selectedStyle():any{
    return {"border-color": "grey", "border": "solid .1vw"};
  }

  public unselectedStyle():any{
    return {"border-color": "transparent"};
  }

}
