import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SliderPrincipalPageRoutingModule } from './slider-principal-routing.module';

import { SliderPrincipalPage } from './slider-principal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SliderPrincipalPageRoutingModule
  ],
  declarations: [SliderPrincipalPage]
})
export class SliderPrincipalPageModule {}
