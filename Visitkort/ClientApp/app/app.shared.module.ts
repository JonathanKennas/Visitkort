/// /*<reference path="../services/visservice.service.ts" />*/
//import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';
//import { FormsModule } from '@angular/forms';
//import { HttpModule } from '@angular/http';
//import { RouterModule } from '@angular/router';

//import { AppComponent } from './components/app/app.component';
//import { NavMenuComponent } from './components/navmenu/navmenu.component';
//import { HomeComponent } from './components/home/home.component';
//import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
//import { CounterComponent } from './components/counter/counter.component';

//@NgModule({
//    declarations: [
//        AppComponent,
//        NavMenuComponent,
//        CounterComponent,
//        FetchDataComponent,
//        HomeComponent
//    ],
//    imports: [
//        CommonModule,
//        HttpModule,
//        FormsModule,
//        RouterModule.forRoot([
//            { path: '', redirectTo: 'home', pathMatch: 'full' },
//            { path: 'home', component: HomeComponent },
//            { path: 'counter', component: CounterComponent },
//            { path: 'fetch-data', component: FetchDataComponent },
//            { path: '**', redirectTo: 'home' }
//        ])
//    ]
//})
//export class AppModuleShared {
//}
import { NgModule } from '@angular/core';
import { VisitkortService } from '../services/visservice.service';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { createvisitkort } from './components/addvisitkort/Addvisitkort.components';
import { FetchVisitkortComponent } from './components/fetchvisitkort/Fetchvisitkort.components';

@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        HomeComponent,
        FetchVisitkortComponent,
        createvisitkort,
    ],

    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'fetch-visitkort', component: FetchVisitkortComponent },
            { path: 'register-visitkort', component: createvisitkort },
            { path: 'visitkort/edit/:id', component: createvisitkort },
            { path: '**', redirectTo: 'home' }
        ])
    ],
    providers: [VisitkortService]
})

export class AppModuleShared {

}
