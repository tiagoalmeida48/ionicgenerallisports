import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModasPage } from './modas.page';

const routes: Routes = [
  {
    path: '',
    component: ModasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModasPageRoutingModule {}
