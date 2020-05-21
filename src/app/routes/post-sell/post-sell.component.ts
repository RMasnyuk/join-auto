import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-post-sell',
  templateUrl: './post-sell.component.html',
  styleUrls: ['./post-sell.component.scss']
})
export class PostSellComponent implements OnInit {
  public photosList = [];
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

  constructor() {
  }

  addPhoto(event) {
    this.photosList.push(event.target.files[0]);
  }

  removePhoto(index) {
    this.photosList.splice(index, 1);
  }

  ngOnInit() {
    this.form = new FormGroup({
      vehicleType: new FormControl(),
      name: new FormControl(),
      model: new FormControl(),
      year: new FormControl(),
      bodyType: new FormControl(),
      mileage: new FormControl(),
      engine: new FormControl(),
      transmittion: new FormControl(),
      wheelDrive: new FormControl(),
      color: new FormControl(),
      price: new FormControl()
    });
  }

  submit() {
    console.log(this.form)
  }
}
