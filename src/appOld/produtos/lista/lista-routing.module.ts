import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaPage } from './lista.page';

const routes: Routes = [
  {
    path: '',
    component: ListaPage
  },
  {
    path: 'roupas',
    loadChildren: () => import('./roupas/roupas.module').then( m => m.RoupasPageModule)
  },
  {
    path: 'tenis',
    loadChildren: () => import('./tenis/tenis.module').then( m => m.TenisPageModule)
  },
  {
    path: 'bolas',
    loadChildren: () => import('./bolas/bolas.module').then( m => m.BolasPageModule)
  },
  {
    path: 'cordas',
    loadChildren: () => import('./cordas/cordas.module').then( m => m.CordasPageModule)
  },
  {
    path: 'acessorios',
    loadChildren: () => import('./acessorios/acessorios.module').then( m => m.AcessoriosPageModule)
  },
  {
    path: 'coletivos',
    loadChildren: () => import('./coletivos/coletivos.module').then( m => m.ColetivosPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaPageRoutingModule {}
