import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HighchartsComponent } from './highcharts/highcharts.component';
import { FormsModule } from '@angular/forms';
import { ChartModule } from 'angular-highcharts';

@NgModule({
  declarations: [
    AppComponent,
    HighchartsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
     ChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
