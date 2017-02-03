import { Component } from '@angular/core';

@Component({
  selector: 'app',
  template: `<h1>Hello {{name}}</h1>
  <a routerLink="/about" routerLinkActive="active">About</a>
  <router-outlet></router-outlet>`
})
export class AppComponent  { name = 'Angular'; }
