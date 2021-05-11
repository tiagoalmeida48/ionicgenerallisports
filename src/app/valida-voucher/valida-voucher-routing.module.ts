import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ValidaVoucherPage } from './valida-voucher.page';

const routes: Routes = [
  {
    path: '',
    component: ValidaVoucherPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ValidaVoucherPageRoutingModule {}
