import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NavbarComponent } from './homepage/navbar/navbar.component';
import { BloodavailabilityComponent } from './homepage/bloodavailability/bloodavailability.component';
import { DonationCampaignsComponent } from './homepage/donation-campaigns/donation-campaigns.component';
import { NewsComponent } from './homepage/news/news.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DonorRegistrationComponent } from './donor-registration/donor-registration.component';
import { DonorProfileComponent } from './donor-profile/donor-profile.component';
import { OrganizerProfileComponent } from './organizer-profile/organizer-profile.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { BloodbankProfileComponent } from './bloodbank-profile/bloodbank-profile.component';
import { HowtodonateComponent } from './homepage/howtodonate/howtodonate.component';
import { HowtootganizeComponent } from './homepage/howtootganize/howtootganize.component';
import { ErrorComponent } from './error/error.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';


const appRoute: Routes = [
  {path:'', component:HomepageComponent}, //default route
  //{path:'', redirectTo:'Home', pathMatch:'full'},
  {path:'Home', component:HomepageComponent},
  {path:'BloodAvailability', component:BloodavailabilityComponent},
  {path:'DonationCampaigns', component:DonationCampaignsComponent},
  {path:'Howtodonate', component:HowtodonateComponent},
  {path:'Howtoorganize', component:HowtootganizeComponent},
  {path:'News', component:NewsComponent},
  {path:'Login', component:LoginComponent},
  {path:'Signup', component:SignupComponent},
  {path:'adminprofile', component:AdminProfileComponent},
  {path:'donorprofile', component:DonorProfileComponent},
  {path:'bloodbankprofile', component:BloodbankProfileComponent},
  {path:'organizerprofile', component:OrganizerProfileComponent},
  {path:'donorregistration', component:DonorRegistrationComponent},
  {path:'**', component:ErrorComponent}
 
]

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NavbarComponent,
    BloodavailabilityComponent,
    DonationCampaignsComponent,
    NewsComponent,
    LoginComponent,
    SignupComponent,
    DonorRegistrationComponent,
    DonorProfileComponent,
    OrganizerProfileComponent,
    AdminProfileComponent,
    BloodbankProfileComponent,
    HowtodonateComponent,
    HowtootganizeComponent,
    ErrorComponent,
    NavigationBarComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
