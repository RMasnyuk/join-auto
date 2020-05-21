import {Component, OnInit} from '@angular/core';
import {OwlOptions} from 'ngx-owl-carousel-o';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ViewPhotosModalComponent} from '../../modals/view-photos-modal/view-photos-modal.component';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {
  customOptions: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['<', '>'],
    responsive: {
      0: {
        items: 1
      }
    },
    nav: true
  };

  constructor(
    private modal: NgbModal
  ) {
  }

  ngOnInit() {
  }
}
