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

  constructor() { }

  ngOnInit() { }

}
