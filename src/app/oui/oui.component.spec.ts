import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OuiComponent } from './oui.component';

describe('OuiComponent', () => {
  let component: OuiComponent;
  let fixture: ComponentFixture<OuiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OuiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OuiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
