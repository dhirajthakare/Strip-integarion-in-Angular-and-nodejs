import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuyPolicyComponent } from './buy-policy.component';

const routes: Routes = [{ path: '', component: BuyPolicyComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BuyPolicyRoutingModule { }
