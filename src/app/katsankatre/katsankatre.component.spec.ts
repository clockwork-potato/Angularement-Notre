import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KatsankatreComponent } from './katsankatre.component';

describe('KatsankatreComponent', () => {
  let component: KatsankatreComponent;
  let fixture: ComponentFixture<KatsankatreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KatsankatreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KatsankatreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
