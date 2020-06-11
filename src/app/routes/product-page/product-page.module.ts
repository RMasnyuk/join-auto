import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {ProductPageComponent} from './product-page.component';
import {AngularSvgIconModule} from 'angular-svg-icon';
import {NgbModalModule, NgbRatingModule} from '@ng-bootstrap/ng-bootstrap';
import {CarouselModule} from 'ngx-owl-carousel-o';
import {ViewPhotosModalModule} from '../../modals/view-photos-modal/view-photos-modal.module';
import {ReactiveFormsModule} from '@angular/forms';
import {AddedProductSuccessModule} from '../../modals/added-product-success/added-product-success.module';
import {AddedProductSuccessComponent} from '../../modals/added-product-success/added-product-success.component';
import {AddRequestOrderSuccessModule} from '../../modals/add-request-order-success/add-request-order-success.module';
import {AddRequestOrderSuccessComponent} from '../../modals/add-request-order-success/add-request-order-success.component';


@NgModule({
  declarations: [
    ProductPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: ProductPageComponent}
    ]),
    AngularSvgIconModule,
    NgbRatingModule,
    CarouselModule,
    ViewPhotosModalModule,
    ReactiveFormsModule,
    NgbModalModule,
    AddedProductSuccessModule,
    AddRequestOrderSuccessModule
  ],
  exports: [ProductPageComponent],
  entryComponents: [AddedProductSuccessComponent,
  AddRequestOrderSuccessComponent]
})
export class ProductPageModule { }
