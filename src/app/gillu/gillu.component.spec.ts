import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GilluComponent } from './gillu.component';

describe('GilluComponent', () => {
  let component: GilluComponent;
  let fixture: ComponentFixture<GilluComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GilluComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GilluComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
