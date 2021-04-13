import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'clinicas',
    loadChildren: () => import('./clinicas/clinicas.module').then( m => m.ClinicasPageModule)
  },
  {
    path: 'academias',
    loadChildren: () => import('./academias/academias.module').then( m => m.AcademiasPageModule)
  },
   {
    path: 'suplementos',
    loadChildren: () => import('./suplementos/suplementos.module').then( m => m.SuplementosPageModule)
  },
  {
    path: 'voucher',
    loadChildren: () => import('./voucher/voucher.module').then( m => m.VoucherPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'items',
    loadChildren: () => import('./items/items.module').then( m => m.ItemsPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
