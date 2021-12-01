import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SliderPrincipalPage } from './slider-principal.page';

const routes: Routes = [
  {
    path: '',
    component: SliderPrincipalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SliderPrincipalPageRoutingModule {}
