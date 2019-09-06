import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HighchartsChartModule } from 'highcharts-angular';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PieChartComponent } from './pie/pie-chart/pie-chart.component';
import { AreaChartComponent } from './area/area-chart/area-chart.component';
import { LineChartComponent } from './line/line-chart/line-chart.component';
import { BarChartComponent } from './bar/bar-chart/bar-chart.component';
import { ScatterChartComponent } from './scatter-and-bubble/scatter-chart/scatter-chart.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidenavComponent } from './sidenav/sidenav.component';


@NgModule({
  declarations: [
    AppComponent,
    PieChartComponent,
    AreaChartComponent,
    LineChartComponent,
    BarChartComponent,
    ScatterChartComponent,
    NavbarComponent,
    SidenavComponent,
  ],
  imports: [
    BrowserModule,
    HighchartsChartModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
