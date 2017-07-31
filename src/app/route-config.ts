// based on http://blog.angular-university.io/angular-2-router-nested-routes-and-nested-auxiliary-routes-build-a-menu-navigation-system/
// and https://angular.io/guide/router

import { Routes, Route } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

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
    {md_icon: 'home', url: 'home'},
    {name: 'About', url: 'about', right: true},
]