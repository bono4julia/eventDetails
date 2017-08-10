import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { ProgramActivitiesDetailsModule } from './components/program-activities-details/program-activities-details.module';
import { CompanyInformationModule } from './components/company-information/company-information.module';
import { LatestActivitiesModule } from './components/latest-activities/latest-activities.module';
import { LatestActivitiesDetailsModule } from './components/latest-activities-details/latest-activities-details.module';
 
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ProgramActivitiesDetailsModule,
    CompanyInformationModule,
    LatestActivitiesModule,
    LatestActivitiesDetailsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
