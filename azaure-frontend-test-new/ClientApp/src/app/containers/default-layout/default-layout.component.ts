import { Component } from '@angular/core';

import { navItems } from 'app/containers/default-layout/_nav';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.scss'],
})
export class DefaultLayoutComponent {
  public navItems = navItems;

  public perfectScrollbarConfig = {
    suppressScrollX: true,
  };

  constructor() {}
}