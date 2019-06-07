import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UsmStoryComponent } from './usm-story/usm-story.component';
import { UsmStoryGridComponent } from './usm-story-grid/usm-story-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    UsmStoryComponent,
    UsmStoryGridComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
