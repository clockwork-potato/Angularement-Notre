import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetanqueUnComponent } from './petanque-un.component';

describe('PetanqueUnComponent', () => {
  let component: PetanqueUnComponent;
  let fixture: ComponentFixture<PetanqueUnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetanqueUnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PetanqueUnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
