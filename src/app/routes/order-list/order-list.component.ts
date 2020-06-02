import {Component, OnInit} from '@angular/core';
import {VehiclesService} from '../../services/vehicles.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {
  public page = 1;
  public orderList: any = [];

  constructor(private vehiclesService: VehiclesService) {
  }

  ngOnInit() {
    // this.vehiclesService.getOrders().subscribe(res => {
    //   this.orderList = res;
    //   console.log(res)
    // });
  }
}
