import { RouterModule } from '@angular/router';
import { IncomeExitComponent } from './income-exit/income-exit.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StatisticsComponent } from './income-exit/statistics/statistics.component';
import { DetailComponent } from './income-exit/detail/detail.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    IncomeExitComponent,
    StatisticsComponent,
    DetailComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, SharedModule, RouterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
