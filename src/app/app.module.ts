import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HighchartsChartModule } from 'highcharts-angular';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PieChartComponent } from './pie/pie-chart/pie-chart.component';
import { AreaChartComponent } from './area/area-chart/area-chart.component';
import { LineChartComponent } from './line/line-chart/line-chart.component';
import { BarChartComponent } from './bar/bar-chart/bar-chart.component';
import { ScatterChartComponent } from './scatter-and-bubble/scatter-chart/scatter-chart.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AjaxLoadedDataComponent } from './line/ajax-loaded-data/ajax-loaded-data.component';
import { DataLabelsComponent } from './line/data-labels/data-labels.component';
import { HomeComponent } from './home/home.component';
import { DisplayLineComponent } from './line/display-line/display-line.component';
import { DonutChartComponent } from './pie/donut-chart/donut-chart.component';
import { DisplayPieComponent } from './pie/display-pie/display-pie.component';
import { DrillDownPieComponent } from './pie/drill-down-pie/drill-down-pie.component';


@NgModule({
  declarations: [
    AppComponent,
    PieChartComponent,
    AreaChartComponent,
    LineChartComponent,
    BarChartComponent,
    ScatterChartComponent,
    NavbarComponent,
    AjaxLoadedDataComponent,
    DataLabelsComponent,
    HomeComponent,
    DisplayLineComponent,
    DonutChartComponent,
    DisplayPieComponent,
    DrillDownPieComponent,
  ],
  imports: [
    BrowserModule,
    HighchartsChartModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
