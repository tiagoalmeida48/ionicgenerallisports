import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfirmarEnderecoPage } from './confirmar-endereco.page';

const routes: Routes = [
  {
    path: '',
    component: ConfirmarEnderecoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfirmarEnderecoPageRoutingModule {}
