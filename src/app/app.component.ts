import { Component } from '@angular/core';
import { Story } from './model/usm-story.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'user-story-mapping';
  public storyOne = new Story("First story in my grid");
  public storyTwo = new Story("Second story in my grid");
  public storyThree = new Story("Third story in my grid");
  public storyFour = new Story("Forth story in my grid");
  public stories : Story[] = [this.storyOne, this.storyTwo, this.storyThree, this.storyFour];

}
