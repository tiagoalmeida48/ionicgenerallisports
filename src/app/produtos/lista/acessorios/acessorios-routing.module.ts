import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AcessoriosPage } from './acessorios.page';

const routes: Routes = [
  {
    path: '',
    component: AcessoriosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AcessoriosPageRoutingModule {}
