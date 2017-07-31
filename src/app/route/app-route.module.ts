import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { routerConfig } from './route-config';
import { RedirectComponent } from './redirect.component'
import { WindowRef } from '../util/window.ref'

@NgModule({
  imports: [RouterModule.forRoot(routerConfig)],
  exports: [RouterModule],
  providers: [WindowRef],
  declarations: [RedirectComponent]
})
export class AppRoutingModule { }
