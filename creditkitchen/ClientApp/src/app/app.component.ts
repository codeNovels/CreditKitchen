import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div>
                <app-header></app-header>
                <router-outlet></router-outlet>
                <app-footer></app-footer>
             </div>
            `
})
export class AppComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

}
