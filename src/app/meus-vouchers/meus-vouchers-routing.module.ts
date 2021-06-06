import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MeusVouchersPage } from './meus-vouchers.page';

const routes: Routes = [
  {
    path: '',
    component: MeusVouchersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MeusVouchersPageRoutingModule {}
