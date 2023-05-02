import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackBoissonComponent } from './pack-boisson.component';

describe('PackBoissonComponent', () => {
  let component: PackBoissonComponent;
  let fixture: ComponentFixture<PackBoissonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PackBoissonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PackBoissonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
