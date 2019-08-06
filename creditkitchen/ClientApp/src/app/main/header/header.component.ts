import { Component, OnInit, HostListener, HostBinding, Inject, Input } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { WINDOW_PROVIDERS, WINDOW } from '../../shared/helpers/window.helper';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isFixed;
  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(WINDOW) private window: Window
  ) { }

  ngOnInit() {
  }

  @HostBinding("class.menu-opened") menuOpened = false;

  toggleMenu() {
    this.menuOpened = !this.menuOpened
  }

  buyEgret() {
    this.window.open('https://www.linkedin.com/in/novels/');
  }

}
