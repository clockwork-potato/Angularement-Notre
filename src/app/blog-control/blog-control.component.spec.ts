import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogControlComponent } from './blog-control.component';

describe('BlogControlComponent', () => {
  let component: BlogControlComponent;
  let fixture: ComponentFixture<BlogControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogControlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
