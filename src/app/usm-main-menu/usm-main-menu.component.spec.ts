import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsmMainMenuComponent } from './usm-main-menu.component';

describe('UsmMainMenuComponent', () => {
  let component: UsmMainMenuComponent;
  let fixture: ComponentFixture<UsmMainMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsmMainMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsmMainMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
