import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CordasPage } from './cordas.page';

const routes: Routes = [
  {
    path: '',
    component: CordasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CordasPageRoutingModule {}
