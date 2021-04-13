import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SuplementosPage } from './suplementos.page';

const routes: Routes = [
  {
    path: '',
    component: SuplementosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SuplementosPageRoutingModule {}
