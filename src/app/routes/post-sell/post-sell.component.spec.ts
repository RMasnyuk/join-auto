import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostSellComponent } from './post-sell.component';

describe('PostSellComponent', () => {
  let component: PostSellComponent;
  let fixture: ComponentFixture<PostSellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostSellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostSellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
