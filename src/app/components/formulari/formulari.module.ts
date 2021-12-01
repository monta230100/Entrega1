import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormulariPageRoutingModule } from './formulari-routing.module';

import { FormulariPage } from './formulari.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormulariPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [FormulariPage]
})
export class FormulariPageModule {}
