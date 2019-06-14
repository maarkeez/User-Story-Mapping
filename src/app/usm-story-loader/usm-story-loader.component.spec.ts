import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsmStoryLoaderComponent } from './usm-story-loader.component';

describe('UsmStoryLoaderComponent', () => {
  let component: UsmStoryLoaderComponent;
  let fixture: ComponentFixture<UsmStoryLoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsmStoryLoaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsmStoryLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
