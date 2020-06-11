import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {ApproveRequestOrderSuccessComponent} from './approve-request-order-success.component';


@NgModule({
  declarations: [
    ApproveRequestOrderSuccessComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ApproveRequestOrderSuccessComponent
  ]
})
export class ApproveRequestOrderSuccessModule { }
