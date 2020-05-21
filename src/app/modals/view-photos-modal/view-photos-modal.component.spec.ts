import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPhotosModalComponent } from './view-photos-modal.component';

describe('ViewPhotosModalComponent', () => {
  let component: ViewPhotosModalComponent;
  let fixture: ComponentFixture<ViewPhotosModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewPhotosModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPhotosModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
