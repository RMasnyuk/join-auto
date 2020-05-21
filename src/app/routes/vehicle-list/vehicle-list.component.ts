import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.scss']
})
export class VehicleListComponent implements OnInit {
  form: FormGroup;
  page = 1;
  bodyTypeData: [{
    name: 'Седан',
    id: 1
  }]
  public keywords = 'name';
  constructor() { }

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

    })
  }

  submit() {
    console.log(this.form)
  }
}
