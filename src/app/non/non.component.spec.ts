import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonComponent } from './non.component';

describe('NonComponent', () => {
  let component: NonComponent;
  let fixture: ComponentFixture<NonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
