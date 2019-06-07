import { Component } from '@angular/core';
import { Story } from './model/usm-story.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'user-story-mapping';
  public storyOne = new Story("(1) First story in my grid");
  public storyTwo = new Story("(2) Second story in my grid");
  public storyThree = new Story("(3) Third story in my grid");
  public storyFour = new Story("(4) Forth story in my grid");
  public stories : Story[][] = [
	  [this.storyOne, this.storyTwo],
	  [this.storyThree, this.storyFour],
	  [this.storyOne, null],
	  [this.storyThree, this.storyFour]
  ];


  constructor(){

  }

}
