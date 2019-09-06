import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { DisplayLineComponent } from './line/display-line/display-line.component';

const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'line-chart', component: DisplayLineComponent}
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {

}