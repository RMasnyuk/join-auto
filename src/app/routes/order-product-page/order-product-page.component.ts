import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {VehiclesService} from '../../services/vehicles.service';
import {ConstantsService} from '../../services/constants.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ApproveRequestOrderSuccessComponent} from '../../modals/approve-request-order-success/approve-request-order-success.component';
import {AddRequestOrderSuccessComponent} from '../../modals/add-request-order-success/add-request-order-success.component';
import {AddRequestFailedComponent} from '../../modals/add-request-failed/add-request-failed.component';

@Component({
  selector: 'app-order-product-page',
  templateUrl: './order-product-page.component.html',
  styleUrls: ['./order-product-page.component.scss']
})
export class OrderProductPageComponent implements OnInit {
  private orderId = this.activatedRoute.snapshot.params.id;
  public orderData: any = {
    user_owner: {}
  };
  public showForm = true;
  public applicationsList = [];
  public showApproveButton = false;
  public isOrderDone = false;
  applicationForm: FormGroup;

  constructor(
    private activatedRoute: ActivatedRoute,
    private vehiclesService: VehiclesService,
    public constantsService: ConstantsService,
    private authService: AuthService,
    private modal: NgbModal
  ) {
  }

  getData() {
    this.vehiclesService.getOrderData(this.orderId).subscribe((res: any) => {
      console.log(res);
      this.orderData = res;
      this.showForm = res.user_owner._id !== this.authService.getUserId();
      this.showApproveButton = res.user_owner._id !== this.authService.userId;
      this.isOrderDone = res.is_done;
      // if(res.is_done) {
      //   alert('this order is done')
      // }
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
      }).subscribe((res) => {
        this.applicationForm.reset();
        this.getData();
        this.modal.open(AddRequestOrderSuccessComponent, {centered: true});
      }, rej => {
        this.modal.open(AddRequestFailedComponent, {centered: true});
      });
    } else {
      console.log(this.applicationForm.valid);
      console.log(this.applicationForm.get('dateComplete').value);
    }
  }

  approveApplication(id) {
    this.vehiclesService.approveOrderApplication({
      application_id: id
    }).subscribe(() => {
      this.getData();
      this.modal.open(ApproveRequestOrderSuccessComponent, {centered: true});
    });
}

declineApplication(id) {
  this.vehiclesService.declineOrderApplication({
    application_id: id
  }).subscribe(() => {
    this.getData();
  });
}

makeOrderDone() {
    this.vehiclesService.makeOrderDone({
      order_id: this.orderId
    }).subscribe(res => {
      this.isOrderDone = true;
    });
}
}
