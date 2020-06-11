import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {OrderProductPageComponent} from './order-product-page.component';
import {RouterModule} from '@angular/router';
import {AngularSvgIconModule} from 'angular-svg-icon';
import {NgbDatepickerModule, NgbModalModule, NgbRatingModule} from '@ng-bootstrap/ng-bootstrap';
import {CarouselModule} from 'ngx-owl-carousel-o';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ApproveRequestOrderSuccessModule} from '../../modals/approve-request-order-success/approve-request-order-success.module';
import {ApproveRequestOrderSuccessComponent} from '../../modals/approve-request-order-success/approve-request-order-success.component';
import {AddRequestOrderSuccessModule} from '../../modals/add-request-order-success/add-request-order-success.module';
import {AddRequestOrderSuccessComponent} from '../../modals/add-request-order-success/add-request-order-success.component';
import {AddRequestFailedComponent} from '../../modals/add-request-failed/add-request-failed.component';
import {AddRequestFailedModule} from '../../modals/add-request-failed/add-request-failed.module';

@NgModule({
  declarations: [
    OrderProductPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: OrderProductPageComponent}
    ]),
    AngularSvgIconModule,
    NgbRatingModule,
    CarouselModule,
    ReactiveFormsModule,
    NgbDatepickerModule,
    FormsModule,
    NgbModalModule,
    ApproveRequestOrderSuccessModule,
    AddRequestOrderSuccessModule,
    AddRequestFailedModule
  ],
  exports: [OrderProductPageComponent],
  entryComponents: [ApproveRequestOrderSuccessComponent, AddRequestOrderSuccessComponent, AddRequestFailedComponent]
})
export class OrderProductPageModule { }
