import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  // {
  //   path: 'home',
  //   loadComponent: () => import("./pages") 
  // },
  {
    path: ':id', // será removido posteriormente
    loadComponent: () =>
      import('./folder/folder.page').then((m) => m.FolderPage),
  },
];
