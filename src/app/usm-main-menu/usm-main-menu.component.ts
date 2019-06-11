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

  	var sJson = JSON.stringify(this.storyService.getStories());
    var element = document.createElement('a');
    element.setAttribute('href', "data:text/json;charset=UTF-8," + encodeURIComponent(sJson));
    element.setAttribute('download', "user-story-mapping-" +  Date.now() + ".json");
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click(); // simulate click
    document.body.removeChild(element);
  }

}
