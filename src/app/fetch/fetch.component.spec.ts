import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchComponent } from './fetch.component';

describe('FetchComponent', () => {
  let component: FetchComponent;
  let fixture: ComponentFixture<FetchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FetchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FetchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
