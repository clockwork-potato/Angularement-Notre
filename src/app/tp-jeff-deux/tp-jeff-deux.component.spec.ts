import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TpJeffDeuxComponent } from './tp-jeff-deux.component';

describe('TpJeffDeuxComponent', () => {
  let component: TpJeffDeuxComponent;
  let fixture: ComponentFixture<TpJeffDeuxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TpJeffDeuxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TpJeffDeuxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
