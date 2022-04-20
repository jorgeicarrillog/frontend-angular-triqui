import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TriquiComponent } from './triqui.component';

describe('TriquiComponent', () => {
  let component: TriquiComponent;
  let fixture: ComponentFixture<TriquiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TriquiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TriquiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
