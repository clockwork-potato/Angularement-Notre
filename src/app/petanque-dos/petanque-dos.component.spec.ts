import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetanqueDosComponent } from './petanque-dos.component';

describe('PetanqueDosComponent', () => {
  let component: PetanqueDosComponent;
  let fixture: ComponentFixture<PetanqueDosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetanqueDosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PetanqueDosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
