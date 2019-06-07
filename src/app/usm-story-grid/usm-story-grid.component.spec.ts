import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsmStoryGridComponent } from './usm-story-grid.component';

describe('UsmStoryGridComponent', () => {
  let component: UsmStoryGridComponent;
  let fixture: ComponentFixture<UsmStoryGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsmStoryGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsmStoryGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
