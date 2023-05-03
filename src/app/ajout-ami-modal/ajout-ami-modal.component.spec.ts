import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutAmiModalComponent } from './ajout-ami-modal.component';

describe('AjoutAmiModalComponent', () => {
  let component: AjoutAmiModalComponent;
  let fixture: ComponentFixture<AjoutAmiModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutAmiModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjoutAmiModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
