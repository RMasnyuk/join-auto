import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AddedProductSuccessComponent} from './added-product-success.component';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [
    AddedProductSuccessComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    AddedProductSuccessComponent
  ]
})
export class AddedProductSuccessModule { }
