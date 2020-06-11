import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveRequestOrderSuccessComponent } from './approve-request-order-success.component';

describe('ApproveRequestOrderSuccessComponent', () => {
  let component: ApproveRequestOrderSuccessComponent;
  let fixture: ComponentFixture<ApproveRequestOrderSuccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApproveRequestOrderSuccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApproveRequestOrderSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
