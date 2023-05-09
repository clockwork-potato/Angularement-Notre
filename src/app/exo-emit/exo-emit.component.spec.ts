import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExoEmitComponent } from './exo-emit.component';

describe('ExoEmitComponent', () => {
  let component: ExoEmitComponent;
  let fixture: ComponentFixture<ExoEmitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExoEmitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExoEmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
