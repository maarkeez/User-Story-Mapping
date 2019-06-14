import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsmStorySaverComponent } from './usm-story-saver.component';

describe('UsmStorySaverComponent', () => {
  let component: UsmStorySaverComponent;
  let fixture: ComponentFixture<UsmStorySaverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsmStorySaverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsmStorySaverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
