import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlatformComponent } from './pages/platform/platform.component';

import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { PlanComponent } from './pages/plan/plan.component';
import { PersonalFormComponent } from './pages/personal-form/personal-form.component';

@NgModule({
  declarations: [
    AppComponent,
    PlatformComponent,
    PlanComponent,
    PersonalFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CardModule,
    ButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
