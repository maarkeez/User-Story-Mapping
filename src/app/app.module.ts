import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UsmStoryComponent } from './usm-story/usm-story.component';
import { UsmStoryGridComponent } from './usm-story-grid/usm-story-grid.component';
import { UsmMainMenuComponent } from './usm-main-menu/usm-main-menu.component';
import { UsmStoryLoaderComponent } from './usm-story-loader/usm-story-loader.component';
import { UsmStorySaverComponent } from './usm-story-saver/usm-story-saver.component';
import { UsmColorPickerComponent } from './usm-color-picker/usm-color-picker.component';

@NgModule({
  declarations: [
    AppComponent,
    UsmStoryComponent,
    UsmStoryGridComponent,
    UsmMainMenuComponent,
    UsmStoryLoaderComponent,
    UsmStorySaverComponent,
    UsmColorPickerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
