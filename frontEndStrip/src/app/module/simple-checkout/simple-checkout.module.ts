import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SimpleCheckoutRoutingModule } from './simple-checkout-routing.module';
import { SimpleCheckoutComponent } from './simple-checkout.component';


@NgModule({
  declarations: [
    SimpleCheckoutComponent
  ],
  imports: [
    CommonModule,
    SimpleCheckoutRoutingModule
  ]
})
export class SimpleCheckoutModule { }
