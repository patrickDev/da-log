import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app/app.component';
import { HeaderComponent } from './app/components/shared/header/header.component';
import { FooterComponent } from './app/components/shared/footer/footer.component';
import { NavComponent } from './app/components/shared/nav/nav.component';
import { LoginComponent } from './app/components/login/login.component';
import { RegisterComponent } from './app/components/register/register.component';
import { PageNotFoundComponent } from './app/components/shared/page-not-found/page-not-found.component';
import { ContactUsComponent } from './app/components/contact-us/contact-us.component';
import { WhatWeDoComponent } from './app/components/what-we-do/what-we-do.component';
import { WhoWeAreComponent } from './app/components/who-we-are/who-we-are.component';
import { HomeComponent } from './app/components/home/home.component';
import { ShippingComponent } from './app/shipping/shipping.component';
import { TrackingComponent } from './app/tracking/tracking.component';
import { FrequencyAskedQuestionsComponent } from './app/frequency-asked-questions/frequency-asked-questions.component';
import { OurPricingListComponent } from './app/our-pricing-list/our-pricing-list.component';
import { ScheduleComponent } from './app/schedule/schedule.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    LoginComponent,
    RegisterComponent,
    PageNotFoundComponent,
    ContactUsComponent,
    WhatWeDoComponent,
    WhoWeAreComponent,
    HomeComponent,
    ShippingComponent,
    TrackingComponent,
    FrequencyAskedQuestionsComponent,
    OurPricingListComponent,
    ScheduleComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
