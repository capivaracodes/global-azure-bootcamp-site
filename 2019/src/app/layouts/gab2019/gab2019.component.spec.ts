import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Gab2019Component } from './gab2019.component';

describe('Gab2019Component', () => {
  let component: Gab2019Component;
  let fixture: ComponentFixture<Gab2019Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Gab2019Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Gab2019Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
