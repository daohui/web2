import { Component } from '@angular/core';

import { routerConfig, topRouteMap } from './route/route-config'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private routes = routerConfig;
  private top = topRouteMap;
  title = 'app';
}
