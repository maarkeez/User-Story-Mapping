import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsmMainContainerComponent } from './usm-main-container.component';

describe('UsmMainContainerComponent', () => {
  let component: UsmMainContainerComponent;
  let fixture: ComponentFixture<UsmMainContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsmMainContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsmMainContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
