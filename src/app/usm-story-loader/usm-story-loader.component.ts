import { Component, OnInit } from '@angular/core';
import { Story } from '../model/usm-story.model';
import { UsmStoryService } from '../usm-story.service';


@Component({
  selector: 'app-usm-story-loader',
  templateUrl: './usm-story-loader.component.html',
  styleUrls: ['./usm-story-loader.component.css']
})
export class UsmStoryLoaderComponent implements OnInit {

  constructor(private storyService: UsmStoryService) { }

  ngOnInit() {
  }

  public upload(){
	var input = document.createElement('input');
	input.type = 'file';

	input.onchange = e => { 

	   // getting a hold of the file reference
	   var file = e.target.files[0]; 

	   // setting up the reader
	   var reader = new FileReader();
	   reader.readAsText(file,'UTF-8');

	   // here we tell the reader what to do when it's done reading...
	   reader.onload = readerEvent => {
	      var content = readerEvent.target.result; // this is the content!
	      console.log( "Loaded json file: " + file.name);
	      console.log( content );
	      var stories : Story[][] = JSON.parse(content);
	      this.storyService.load(stories);
	   }

	}

	input.click();
  }

}
