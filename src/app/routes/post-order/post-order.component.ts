import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-post-order',
  templateUrl: './post-order.component.html',
  styleUrls: ['./post-order.component.scss']
})
export class PostOrderComponent implements OnInit {
  public keywords = 'name';
  form: FormGroup;
  data = [
    {
      id: 1,
      name: 'Usa'
    },
    {
      id: 2,
      name: 'England'
    }
  ];

  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      vehicleType: new FormControl(),
      name: new FormControl(),
      model: new FormControl(),
      yearFrom: new FormControl(),
      yearTo: new FormControl(),
      bodyType: new FormControl(),
      mileage: new FormControl(),
      engine: new FormControl(),
      transmittion: new FormControl(),
      wheelDrive: new FormControl(),
      color: new FormControl(),
      priceFrom: new FormControl(),
      priceTo: new FormControl()
    });
  }

  submit() {

  }
}
