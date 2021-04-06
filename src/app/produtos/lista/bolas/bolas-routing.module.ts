import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BolasPage } from './bolas.page';

const routes: Routes = [
  {
    path: '',
    component: BolasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BolasPageRoutingModule {}
