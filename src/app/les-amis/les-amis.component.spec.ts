import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LesAmisComponent } from './les-amis.component';

describe('LesAmisComponent', () => {
  let component: LesAmisComponent;
  let fixture: ComponentFixture<LesAmisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LesAmisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LesAmisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
