import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewtwoComponent } from './viewtwo.component';

describe('ViewtwoComponent', () => {
  let component: ViewtwoComponent;
  let fixture: ComponentFixture<ViewtwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewtwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewtwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
