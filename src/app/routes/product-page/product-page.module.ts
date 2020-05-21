import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {ProductPageComponent} from './product-page.component';
import {AngularSvgIconModule} from 'angular-svg-icon';
import {NgbRatingModule} from '@ng-bootstrap/ng-bootstrap';
import {CarouselModule} from 'ngx-owl-carousel-o';
import {ViewPhotosModalModule} from '../../modals/view-photos-modal/view-photos-modal.module';


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
    ViewPhotosModalModule
  ],
  exports: [ProductPageComponent]
})
export class ProductPageModule { }
