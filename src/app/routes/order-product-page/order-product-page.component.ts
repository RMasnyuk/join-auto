import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {VehiclesService} from '../../services/vehicles.service';
import {ConstantsService} from '../../services/constants.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-order-product-page',
  templateUrl: './order-product-page.component.html',
  styleUrls: ['./order-product-page.component.scss']
})
export class OrderProductPageComponent implements OnInit {
  private orderId = this.activatedRoute.snapshot.params.id;
  public orderData: any = {};
  public showForm = true;
  public applicationsList = [];
  applicationForm: FormGroup;

  constructor(
    private activatedRoute: ActivatedRoute,
    private vehiclesService: VehiclesService,
    public constantsService: ConstantsService,
    private authService: AuthService
  ) {
  }

  getData() {
    this.vehiclesService.getOrderData(this.orderId).subscribe((res: any) => {
      console.log(res);
      this.orderData = res;
      this.showForm = res.user_owner._id !== this.authService.getUserId();
      this.vehiclesService.getOrderApplications(res._id).subscribe((response: any) => {
        this.applicationsList = response.applications;
        console.log(this.applicationsList);
      });
    });
  }

  ngOnInit() {
    this.applicationForm = new FormGroup({
      message: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required]),
      dateComplete: new FormControl(new Date(), [Validators.required])
    });
    this.getData();
  }

  createApplication() {
    if (this.applicationForm.valid) {
      this.vehiclesService.createOrderApplication({
        id: this.orderId,
        message: this.applicationForm.get('message').value,
        price: this.applicationForm.get('price').value,
        date_complete_to: this.applicationForm.get('dateComplete').value
      }).subscribe(() => {
        this.applicationForm.reset();
        this.getData();
      });
    } else {
      console.log(this.applicationForm.valid);
      console.log(this.applicationForm.get('dateComplete').value);
    }
  }
}
