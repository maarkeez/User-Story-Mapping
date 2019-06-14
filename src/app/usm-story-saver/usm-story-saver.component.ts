import { Component, OnInit } from '@angular/core';
import { UsmStoryService } from '../usm-story.service';

@Component({
  selector: 'app-usm-story-saver',
  templateUrl: './usm-story-saver.component.html',
  styleUrls: ['./usm-story-saver.component.css']
})
export class UsmStorySaverComponent implements OnInit {

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
