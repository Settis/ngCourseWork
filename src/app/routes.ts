import { ListComponent } from './list/list.component'

import { Route } from '@angular/router';
import {TripInfoComponent} from './trip-info/trip-info.component';

export const routes: Route [] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'list',
  },
  {
    path: 'list',
    component: ListComponent,
  },
  {
    path: 'trip',
    children: [
      {
        path: 'all',
        component: ListComponent,
      },
      {
        path: ':id',
        component: TripInfoComponent,
      }
    ]
  },
  {
    path: '**',
    redirectTo: ''
  }
];
