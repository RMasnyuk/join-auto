import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {VehiclesService} from '../../services/vehicles.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  public keywords = 'name';
  public form: FormGroup;
  public isCollapsed = false;
  productsList: any = [];
  orderList: any = [];
  typeData = [
    {
      id: 1,
      name: 'Будь-який'
    },
    {
      id: 2,
      name: 'Легкові'
    },
    {
      id: 3,
      name: 'Мото'
    },
    {
      id: 4,
      name: 'Грузовики'
    }
  ];

  markData = [
    {
      id: 1,
      name: 'BMW'
    },
    {
      id: 2,
      name: 'Mercedes'
    },
    {
      id: 3,
      name: 'Audi'
    },
    {
      id: 4,
      name: 'Volkswagen'
    }
  ];

  modelData = [
    {
      id: 1,
      name: ''
    },
    {
      id: 2,
      name: ''
    },
    {
      id: 3,
      name: ''
    },
    {
      id: 4,
      name: ''
    }
  ];

  yearFrom = [
    {name: '2020'}
  ]
  constructor(
    private vehiclesService: VehiclesService
  ) { }

  ngOnInit() {
    this.form = new FormGroup({
      type: new FormControl(),
      mark: new FormControl(),
      model: new FormControl(),
      region: new FormControl(),
      yearFrom: new FormControl(),
      yearTo: new FormControl(),
      priceFrom: new FormControl(),
      priceTo: new FormControl()
    });

    this.vehiclesService.getVehicles().subscribe( (res: any) => {
      this.productsList = res.items.slice(0, 8);
      console.log(this.productsList);
    });

    this.vehiclesService.getOrderList().subscribe((res: any) => {
      this.orderList = res.items.slice(0, 8);
    });
  }

  submit() {
  }

}
