import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component' 
import { AboutComponent } from './component/about/about.component';
import { PageNotFoundComponent } from './component/PageNotFound/PageNotFound.component';

const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },   
    { path: '**', component: PageNotFoundComponent }
];


@NgModule({
    imports: [BrowserModule, RouterModule.forRoot(appRoutes)],
    declarations: [AppComponent, AboutComponent, PageNotFoundComponent, HomeComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }
