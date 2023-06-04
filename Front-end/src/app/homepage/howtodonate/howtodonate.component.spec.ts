import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowtodonateComponent } from './howtodonate.component';

describe('HowtodonateComponent', () => {
  let component: HowtodonateComponent;
  let fixture: ComponentFixture<HowtodonateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HowtodonateComponent]
    });
    fixture = TestBed.createComponent(HowtodonateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
