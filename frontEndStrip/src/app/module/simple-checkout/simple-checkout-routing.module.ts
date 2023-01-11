import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SimpleCheckoutComponent } from './simple-checkout.component';

const routes: Routes = [{ path: '', component: SimpleCheckoutComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SimpleCheckoutRoutingModule { }
