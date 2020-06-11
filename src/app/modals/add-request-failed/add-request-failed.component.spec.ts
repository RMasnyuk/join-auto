import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRequestFailedComponent } from './add-request-failed.component';

describe('AddRequestFailedComponent', () => {
  let component: AddRequestFailedComponent;
  let fixture: ComponentFixture<AddRequestFailedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddRequestFailedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRequestFailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
