import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {VehiclesService} from '../../services/vehicles.service';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.scss']
})
export class VehicleListComponent implements OnInit {
  public vehicleList = [];
  form: FormGroup;
  page = 1;
  bodyTypeData: [{
    name: 'Седан',
    id: 1
  }]
  public keywords = 'name';
  constructor(private vehiclesService: VehiclesService) { }

  ngOnInit() {
    this.form = new FormGroup({
      priceFrom: new FormControl(),
      priceTo: new FormControl(),
      isNew: new FormControl(),
      vehicleType: new FormControl(),
      isAvailableForPromote: new FormControl(),
      bodyType: new FormControl(),
      mileageFrom: new FormControl(),
      mileageTo: new FormControl(),
      engine: new FormControl(),
      transmittion: new FormControl(),
      wheelDrive: new FormControl()
    });

    this.vehiclesService.getVehicles().subscribe( (res: any) => {
      this.vehicleList = res.items;
  });
  }

  submit() {
    console.log(this.form);
  }
}
