import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuyPolicyRoutingModule } from './buy-policy-routing.module';
import { BuyPolicyComponent } from './buy-policy.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    BuyPolicyComponent
  ],
  imports: [
    CommonModule,
    BuyPolicyRoutingModule,
    FormsModule
  ]
})
export class BuyPolicyModule { }
