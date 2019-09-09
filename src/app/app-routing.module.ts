import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { DisplayLineComponent } from './line/display-line/display-line.component';
import { DisplayPieComponent } from './pie/display-pie/display-pie.component';
import { DisplayAreaComponent } from './area/display-area/display-area.component';
import { DisplayBarComponent } from './bar/display-bar/display-bar.component';
import { DisplayScatterComponent } from './scatter-and-bubble/display-scatter/display-scatter.component';

// Defining the routes
const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'line-chart', component: DisplayLineComponent},
    {path: 'pie-chart', component: DisplayPieComponent},
    {path: 'area-chart', component: DisplayAreaComponent},
    {path: 'bar-chart', component: DisplayBarComponent},
    {path: 'scatter-chart', component: DisplayScatterComponent}
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {

}