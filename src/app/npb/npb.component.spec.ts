import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NPBComponent } from './npb.component';

describe('NPBComponent', () => {
  let component: NPBComponent;
  let fixture: ComponentFixture<NPBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NPBComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NPBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
