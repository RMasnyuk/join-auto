import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {OrderProductPageComponent} from './order-product-page.component';
import {RouterModule} from '@angular/router';
import {AngularSvgIconModule} from 'angular-svg-icon';
import {NgbRatingModule} from '@ng-bootstrap/ng-bootstrap';
import {CarouselModule} from 'ngx-owl-carousel-o';

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
    CarouselModule
  ],
  exports: [OrderProductPageComponent]
})
export class OrderProductPageModule { }
