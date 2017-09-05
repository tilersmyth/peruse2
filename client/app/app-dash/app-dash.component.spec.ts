import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppDashComponent } from './app-dash.component';

describe('AppDashComponent', () => {
  let component: AppDashComponent;
  let fixture: ComponentFixture<AppDashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppDashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
