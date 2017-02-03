import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes} from '@angular/router';
import { AppComponent }   from './app.component';
import { AboutComponent } from './component/about.component';

const appRoutes: Routes = [
    { path: 'about', component: AboutComponent},
    { path: '', redirectTo: '/', pathMatch: 'full'}
]


@NgModule({
    imports: [BrowserModule, RouterModule, Routes],
    declarations: [AppComponent, AboutComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }
