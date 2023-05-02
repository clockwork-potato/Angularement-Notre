import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnAmiComponent } from './un-ami.component';

describe('UnAmiComponent', () => {
  let component: UnAmiComponent;
  let fixture: ComponentFixture<UnAmiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnAmiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnAmiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
