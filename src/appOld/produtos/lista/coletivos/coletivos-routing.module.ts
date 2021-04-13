import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ColetivosPage } from './coletivos.page';

const routes: Routes = [
  {
    path: '',
    component: ColetivosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ColetivosPageRoutingModule {}
