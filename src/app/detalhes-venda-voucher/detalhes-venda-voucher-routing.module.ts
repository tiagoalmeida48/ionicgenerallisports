import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalhesVendaVoucherPage } from './detalhes-venda-voucher.page';

const routes: Routes = [
  {
    path: '',
    component: DetalhesVendaVoucherPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalhesVendaVoucherPageRoutingModule {}
