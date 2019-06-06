import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-usm-story',
  templateUrl: './usm-story.component.html',
  styleUrls: ['./usm-story.component.css']
})
export class UsmStoryComponent implements OnInit {

  public storyText: String;

  constructor() { }

  ngOnInit() {
  }

  public enableEditText(){
  	  console.log("Editing text");
  }

}
