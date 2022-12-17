import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RKComponent } from './rk.component';

describe('RKComponent', () => {
  let component: RKComponent;
  let fixture: ComponentFixture<RKComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RKComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RKComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
