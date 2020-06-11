import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {AddRequestOrderSuccessComponent} from './add-request-order-success.component';


@NgModule({
  declarations: [
    AddRequestOrderSuccessComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    AddRequestOrderSuccessComponent
  ]
})
export class AddRequestOrderSuccessModule { }
