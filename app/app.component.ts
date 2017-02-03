import { Component } from '@angular/core';

@Component({
  selector: 'app',
  template: `<h1>Logo</h1>
  <nav class="navbar navbar-inverse">
    <div class="container-fluid">
     <ul class="nav navbar-nav">
      <li><a routerLink="/home">Home</a></li>
      <li><a routerLink="/about">About</a></li>
      <li><a>Form</a></li>
    </ul>
    </div>
  </nav>
  
  <router-outlet></router-outlet>`
})
export class AppComponent  { name = 'Angular'; }
