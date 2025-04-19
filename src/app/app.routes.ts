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
    path: 'perfil',
    loadComponent: () =>
      import('./pages/perfil/perfil.page').then((m) => m.PerfilPage),
  },
  {
    path: ':id', // será removido posteriormente
    loadComponent: () =>
      import('./folder/folder.page').then((m) => m.FolderPage),
  },
];
