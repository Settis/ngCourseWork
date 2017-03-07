import { ListComponent } from './list/list.component'

import { Route } from '@angular/router';

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
  // {
  //   path: 'users',
  //   children: [
  //     {
  //       path: '',
  //       redirectTo: 'all',
  //       pathMatch: 'full'
  //     },
  //     {
  //       path: 'all',
  //       component: UsersComponent,
  //       data: { title: 'User list' },
  //       resolve: {
  //         users: UsersResolverService
  //       },
  //       canActivate:[GuardService]
  //     },
  //     {
  //       path: 'user/:id',
  //       component: UserComponent
  //     }
  //   ]
  //
  // },
  {
    path: '**',
    redirectTo: ''
  }
];
