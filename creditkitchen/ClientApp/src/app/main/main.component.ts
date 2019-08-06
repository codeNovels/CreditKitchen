import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-main',
  template: `<div class="landing">
                  <app-landing></app-landing>
              </div>`
})
export class MainComponent implements OnInit, OnDestroy {
  posts;
  headlines;

  constructor(
  ) { }

  ngOnInit() {

  }
  ngOnDestroy() {
  }


}
