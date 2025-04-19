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
    path: 'agenda',
    loadComponent: () =>
      import('./pages/agenda/agenda.page').then((m) => m.AgendaPage),
  },
  {
    path: 'reserva',
    loadComponent: () => import('./pages/reserva/reserva.page').then(m => m.ReservaPage),
  },
  {
    path: 'confirmacao',
    loadComponent: () => import('./pages/confirmacao/confirmacao.page').then(m => m.ConfirmacaoPage),
  },
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
