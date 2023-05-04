import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TpDirectivesComponent } from './tp-directives.component';

describe('TpDirectivesComponent', () => {
  let component: TpDirectivesComponent;
  let fixture: ComponentFixture<TpDirectivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TpDirectivesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TpDirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
