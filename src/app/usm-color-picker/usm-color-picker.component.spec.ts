import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsmColorPickerComponent } from './usm-color-picker.component';

describe('UsmColorPickerComponent', () => {
  let component: UsmColorPickerComponent;
  let fixture: ComponentFixture<UsmColorPickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsmColorPickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsmColorPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
