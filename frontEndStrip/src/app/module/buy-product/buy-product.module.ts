import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuyProductRoutingModule } from './buy-product-routing.module';
import { BuyProductComponent } from './buy-product.component';


@NgModule({
  declarations: [
    BuyProductComponent
  ],
  imports: [
    CommonModule,
    BuyProductRoutingModule
  ]
})
export class BuyProductModule { }
