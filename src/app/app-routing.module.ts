import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DefaultLayoutComponent} from './layouts/default-layout/default-layout.component';
import {HomePageComponent} from './routes/home-page/home-page.component';
import {AuthGuardService} from './services/auth.guard';



const routes: Routes = [
  {
    path: '', component: DefaultLayoutComponent, children: [
      {path: '', component: HomePageComponent},
      {path: 'vehicle-list', loadChildren: () => import('./routes/vehicle-list/vehicle-list.module').then(m => m.VehicleListModule)},
      {path: 'product-page', loadChildren: () => import('./routes/product-page/product-page.module').then(m => m.ProductPageModule)},
      {path: 'post-sell', loadChildren: () => import('./routes/post-sell/post-sell.module').then(m => m.PostSellModule)},
      {path: 'post-order', loadChildren: () => import('./routes/post-order/post-order.module').then(m => m.PostOrderModule)},
      {
        path: 'order-page',
        loadChildren: () => import('./routes/order-product-page/order-product-page.module').then(m => m.OrderProductPageModule)
      },
      {
        path: 'order-list',
        loadChildren: () => import('./routes/order-list/order-list.module').then(m => m.OrderListModule)
      },
      {
        path: 'user-profile', loadChildren: () => import('./routes/user-profile/user-profile.module').then(m => m.UserProfileModule)
      }
    ]
  },
  {
    path: 'login',
    loadChildren: () => import('./routes/login-page/login-page.module').then(m => m.LoginPageModule), canActivate: [!AuthGuardService]
  },
  {
    path: 'sign-up', loadChildren: () => import('./routes/sign-up/sign-up.module').then(m => m.SignUpModule), canActivate: [!AuthGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
