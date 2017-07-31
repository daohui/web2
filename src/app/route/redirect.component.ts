import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { BehaviorSubject } from 'rxjs'
import { WindowRef } from '../util/window.ref'
import { externalUrls } from './route-config'

@Component({
  template: ''
})
export class RedirectComponent implements OnInit {

  constructor(private winRef: WindowRef,
              private route: ActivatedRoute) { }

  ngOnInit() {
    let d = this.route.data;
    let externalOpenned = false;
    if (d instanceof BehaviorSubject) {
      let key = d.getValue().ref;
      if (key && externalUrls[key]) {
        externalOpenned = true;
        this.winRef.nativeWindow.location.href = externalUrls[key];
      }
    }
    if (!externalOpenned) {
      console.error('do not expect to reach here. route data', this.route.data);
    }
  }

}
