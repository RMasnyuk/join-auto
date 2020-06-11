import {Component, OnInit} from '@angular/core';
import {OwlOptions} from 'ngx-owl-carousel-o';
import {ActivatedRoute} from '@angular/router';
import {VehiclesService} from '../../services/vehicles.service';
import {ConstantsService} from '../../services/constants.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {AddedProductSuccessComponent} from '../../modals/added-product-success/added-product-success.component';
import {AddRequestOrderSuccessComponent} from '../../modals/add-request-order-success/add-request-order-success.component';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {
  private productId = this.activatedRoute.snapshot.params.id;
  public userLogginedId;
  public productData: any = {};
  public userInfo: any = {};
  public buyRequests: any = [];
  public isLoggedIn = false;
  public showForm = true;
  public showApproveButton = false;
  public availableForPromote = false;
  public isProductAdded = false;
  public isSoldWith;
  public soldWithUserName;
  private q = this.activatedRoute.snapshot.queryParamMap.get('q');
  isProductShared = false;
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
    private authService: AuthService,
    private modal: NgbModal
  ) {
  }

  getData() {
    this.vehiclesService.getVehicleData(this.productId, this.q ? this.q : '').subscribe((res: any) => {
      this.productData = res;
      this.isSold = res.is_sold;
      this.buyRequests = res.buy_requests;
      this.availableForPromote = res.available_for_promote;
      this.isProductShared = res.is_product_shared;
      this.isSoldWith = res.is_sold_with_user_id;
      if(this.isSoldWith) {
        this.vehiclesService.getUserInfo(this.isSoldWith).subscribe((resolve: any) => {
          this.soldWithUserName = resolve.user_name;
        });
      }
      console.log(res);
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
        this.modal.open(AddRequestOrderSuccessComponent, {centered: true});
      });
    }
  }

  approve(requestId) {
    this.vehiclesService.approveBuyRequest({
      product_id: this.productId,
      request_id: requestId
    }).subscribe(res => {
      this.isSold = true;
      this.getData();
    });
  }

  decline(requestId: any) {
    this.vehiclesService.declineRequest({
      product_id: this.productId,
      request_id: requestId
    }).subscribe(() => {
      this.getData();
    });
  }

  addToOwnList() {
    this.vehiclesService.addProductToOwnList({
      product_id: this.productId
    }).subscribe(res => {
      this.isProductAdded = true;
      this.getData();
      this.modal.open(AddedProductSuccessComponent, {centered: true});
    });
  }
}
