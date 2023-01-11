import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'navbar', loadChildren: () => import('./common/navbar/navbar.module').then(m => m.NavbarModule) }, { path: '', loadChildren: () => import('./module/simple-checkout/simple-checkout.module').then(m => m.SimpleCheckoutModule) }, { path: 'buyProduct', loadChildren: () => import('./module/buy-product/buy-product.module').then(m => m.BuyProductModule) }, { path: 'buypolicy', loadChildren: () => import('./module/buy-policy/buy-policy.module').then(m => m.BuyPolicyModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
