import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonationCampaignsComponent } from './donation-campaigns.component';

describe('DonationCampaignsComponent', () => {
  let component: DonationCampaignsComponent;
  let fixture: ComponentFixture<DonationCampaignsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DonationCampaignsComponent]
    });
    fixture = TestBed.createComponent(DonationCampaignsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
