import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalhesVoucherPage } from './detalhes-voucher.page';

const routes: Routes = [
  {
    path: '',
    component: DetalhesVoucherPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalhesVoucherPageRoutingModule {}
