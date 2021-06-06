import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalhesCompraVoucherPage } from './detalhes-compra-voucher.page';

const routes: Routes = [
  {
    path: '',
    component: DetalhesCompraVoucherPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalhesCompraVoucherPageRoutingModule {}
