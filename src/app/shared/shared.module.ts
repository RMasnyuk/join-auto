import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './product-card/product-card.component';
import {RouterModule} from '@angular/router';
import { OrderCardComponent } from './order-card/order-card.component';



@NgModule({
  declarations: [ProductCardComponent, OrderCardComponent],
    imports: [
        CommonModule,
        RouterModule
    ],
  exports: [
    ProductCardComponent,
    OrderCardComponent
  ]
})
export class SharedModule { }
