import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SucessoCompraPage } from './sucesso-compra.page';

const routes: Routes = [
  {
    path: '',
    component: SucessoCompraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SucessoCompraPageRoutingModule {}
