import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Story } from '../model/usm-story.model';

@Component({
  selector: 'app-usm-story',
  templateUrl: './usm-story.component.html',
  styleUrls: ['./usm-story.component.css']
})
export class UsmStoryComponent implements OnInit {

  @Input() story: Story;
  private openMenu : boolean = false;

  constructor() { }

  ngOnInit() { }

  public showStory() : boolean {
  	return this.story != null;
  }

  public addStory() {
  	this.story = new Story("");
  }

  public removeStory() {
    this.story = null;
  }

}
