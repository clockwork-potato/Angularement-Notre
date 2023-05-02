import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaspecialelasallaleComponent } from './laspecialelasallale.component';

describe('LaspecialelasallaleComponent', () => {
  let component: LaspecialelasallaleComponent;
  let fixture: ComponentFixture<LaspecialelasallaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaspecialelasallaleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaspecialelasallaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
