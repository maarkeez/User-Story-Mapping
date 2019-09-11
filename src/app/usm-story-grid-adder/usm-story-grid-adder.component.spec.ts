import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsmStoryGridAdderComponent } from './usm-story-grid-adder.component';

describe('UsmStoryGridAdderComponent', () => {
  let component: UsmStoryGridAdderComponent;
  let fixture: ComponentFixture<UsmStoryGridAdderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsmStoryGridAdderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsmStoryGridAdderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
