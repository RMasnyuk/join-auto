import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRequestOrderSuccessComponent } from './add-request-order-success.component';

describe('AddRequestOrderSuccessComponent', () => {
  let component: AddRequestOrderSuccessComponent;
  let fixture: ComponentFixture<AddRequestOrderSuccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddRequestOrderSuccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRequestOrderSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
