import { NgModule } from '@angular/core'
import { Routes, RouterModule }  from '@angular/router'
import { RegisterComponent } from './app/components/register/register.component'
import { LoginComponent } from './app/components/login/login.component'
import { PageNotFoundComponent } from './app/components/shared/page-not-found/page-not-found.component'
import { ContactUsComponent} from './app/components/contact-us/contact-us.component'
import { WhatWeDoComponent } from './app/components/what-we-do/what-we-do.component'
import { WhoWeAreComponent } from './app/components/who-we-are/who-we-are.component'
import { HomeComponent } from './app/components/home/home.component'
import { ShippingComponent } from './app/shipping/shipping.component'
import { TrackingComponent } from './app/tracking/tracking.component'
import { FrequencyAskedQuestionsComponent } from './app/frequency-asked-questions/frequency-asked-questions.component'
import { OurPricingListComponent } from './app/our-pricing-list/our-pricing-list.component'
import { ScheduleComponent } from './app/schedule/schedule.component'

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent},
    { path: 'login', component: LoginComponent},
    { path: 'register', component: RegisterComponent},
    { path: 'contact-us', component: ContactUsComponent},
    { path: 'what-we-do', component:WhatWeDoComponent},
    { path: 'who-we-are', component:WhoWeAreComponent},
    { path: 'shipping', component:ShippingComponent},
    { path: 'tracking', component:TrackingComponent},
    { path: 'faq', component:FrequencyAskedQuestionsComponent },
    { path: 'schedule', component:ScheduleComponent },
    { path: 'our-pricing-list', component:OurPricingListComponent },
    { path: '**', component: PageNotFoundComponent }

    
] 
@NgModule({
    
    imports : [
        RouterModule.forRoot(routes)
    ],
    exports : [
        RouterModule
    ]
})
export class AppRoutingModule {

}