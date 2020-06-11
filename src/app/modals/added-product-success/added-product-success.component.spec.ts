import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddedProductSuccessComponent } from './added-product-success.component';

describe('AddedProductSuccessComponent', () => {
  let component: AddedProductSuccessComponent;
  let fixture: ComponentFixture<AddedProductSuccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddedProductSuccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddedProductSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
