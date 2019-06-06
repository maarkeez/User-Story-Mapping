import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsmStoryComponent } from './usm-story.component';

describe('UsmStoryComponent', () => {
  let component: UsmStoryComponent;
  let fixture: ComponentFixture<UsmStoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsmStoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsmStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
