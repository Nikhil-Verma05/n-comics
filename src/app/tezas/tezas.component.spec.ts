import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TezasComponent } from './tezas.component';

describe('TezasComponent', () => {
  let component: TezasComponent;
  let fixture: ComponentFixture<TezasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TezasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TezasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
