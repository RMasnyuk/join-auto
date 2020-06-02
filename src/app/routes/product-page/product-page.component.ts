import {Component, OnInit} from '@angular/core';
import {OwlOptions} from 'ngx-owl-carousel-o';
import {ActivatedRoute} from '@angular/router';
import {VehiclesService} from '../../services/vehicles.service';
import {ConstantsService} from '../../services/constants.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {
  private productId = this.activatedRoute.snapshot.params.id;
  public productData = {};
  public userInfo = {};
  public buyRequests = [];
  public isLoggedIn = false;
  public showForm = true;
  public showApproveButton = false;
  isSold = false;
  public addOfferForm: FormGroup;
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
    private activatedRoute: ActivatedRoute,
    private vehiclesService: VehiclesService,
    public constantsService: ConstantsService,
    private authService: AuthService
  ) {
  }

  getData() {
    this.vehiclesService.getVehicleData(this.productId).subscribe((res: any) => {
      this.productData = res;
      this.isSold = res.is_sold;
      this.buyRequests = res.buy_requests;
      this.showForm = res.user_owner !== this.authService.getUserId();
      this.showApproveButton = res.user_owner !== this.authService.userId;
      this.vehiclesService.getUserInfo(res.user_owner).subscribe(response => {
        this.userInfo = response;
      });
    });
  }

  ngOnInit() {
    this.getData();
    this.addOfferForm = new FormGroup({
      comment: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required])
    });

    this.isLoggedIn = this.authService.isAuthenticated();
  }

  createOffer() {
    if (this.addOfferForm.valid) {
      this.vehiclesService.createOffer({
        product_id: this.productId,
        comment: this.addOfferForm.get('comment').value,
        price: this.addOfferForm.get('price').value
      }).subscribe(() => {
        this.getData();
        this.addOfferForm.reset();
      });
    }
  }

  approve(requestId) {
    this.vehiclesService.approveBuyRequest({
      product_id: this.productId,
      request_id: requestId
    }).subscribe(res => this.isSold = true);
  }

  decline(requestId: any) {
    this.vehiclesService.declineRequest({
      product_id: this.productId,
      request_id: requestId
    }).subscribe();
  }
}
