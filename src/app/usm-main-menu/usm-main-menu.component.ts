import { Component, OnInit } from '@angular/core';
import { Story } from '../model/usm-story.model';
import { UsmStoryService } from '../usm-story.service';


@Component({
  selector: 'app-usm-main-menu',
  templateUrl: './usm-main-menu.component.html',
  styleUrls: ['./usm-main-menu.component.css']
})
export class UsmMainMenuComponent implements OnInit {

  constructor(private storyService: UsmStoryService) { }


  ngOnInit() { }

  public save() {
  	console.log("Saving stories: ");
  	console.log(this.storyService.getStories());
  }

}
