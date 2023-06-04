import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowtootganizeComponent } from './howtootganize.component';

describe('HowtootganizeComponent', () => {
  let component: HowtootganizeComponent;
  let fixture: ComponentFixture<HowtootganizeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HowtootganizeComponent]
    });
    fixture = TestBed.createComponent(HowtootganizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
