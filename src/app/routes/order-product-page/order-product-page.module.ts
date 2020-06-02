import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {OrderProductPageComponent} from './order-product-page.component';
import {RouterModule} from '@angular/router';
import {AngularSvgIconModule} from 'angular-svg-icon';
import {NgbDatepickerModule, NgbRatingModule} from '@ng-bootstrap/ng-bootstrap';
import {CarouselModule} from 'ngx-owl-carousel-o';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

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
    FormsModule
  ],
  exports: [OrderProductPageComponent]
})
export class OrderProductPageModule { }
