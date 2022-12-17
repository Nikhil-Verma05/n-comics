import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NCKComponent } from './nck.component';

describe('NCKComponent', () => {
  let component: NCKComponent;
  let fixture: ComponentFixture<NCKComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NCKComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NCKComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
