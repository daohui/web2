// based on http://blog.angular-university.io/angular-2-router-nested-routes-and-nested-auxiliary-routes-build-a-menu-navigation-system/
// and https://angular.io/guide/router

import { Routes, Route } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';

import { RedirectComponent } from './redirect.component'
import { WindowRef } from './window.ref'

export const externalUrls = {
    'external': 'http://ec2-34-210-151-222.us-west-2.compute.amazonaws.com/'
}

export const routerConfig: Route[] = [
    {
        path: 'home',
        component: HomeComponent,
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'external',
        component: RedirectComponent,
        data: {ref: 'external'}
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: '/home',
        pathMatch: 'full'
    }
];

export interface UiUrlMap {
    "name" ?: string,
    "url": string,
    "md_icon"?: string
    "right"?: boolean
}

export const topRouteMap : UiUrlMap[] = [
    {md_icon: 'home', name:'Daohui Li', url: 'home'},
    {name: 'External', url: 'external'},
    {name: 'About', url: 'about', right: true}
]