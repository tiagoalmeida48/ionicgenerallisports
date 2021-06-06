import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EscolherPagamentoVoucherPage } from './escolher-pagamento-voucher.page';

const routes: Routes = [
  {
    path: '',
    component: EscolherPagamentoVoucherPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EscolherPagamentoVoucherPageRoutingModule {}
