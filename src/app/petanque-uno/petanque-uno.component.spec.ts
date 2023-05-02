import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetanqueUnoComponent } from './petanque-uno.component';

describe('PetanqueUnoComponent', () => {
  let component: PetanqueUnoComponent;
  let fixture: ComponentFixture<PetanqueUnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetanqueUnoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PetanqueUnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
