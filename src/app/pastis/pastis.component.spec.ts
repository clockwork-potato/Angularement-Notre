import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastisComponent } from './pastis.component';

describe('PastisComponent', () => {
  let component: PastisComponent;
  let fixture: ComponentFixture<PastisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PastisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PastisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
