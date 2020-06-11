import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {VehiclesService} from '../../services/vehicles.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-post-order',
  templateUrl: './post-order.component.html',
  styleUrls: ['./post-order.component.scss']
})
export class PostOrderComponent implements OnInit {
  public keywords = 'name';
  public validForm = true;
  form: FormGroup;
  data = [
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
    }
  ];

  constructor(private vehiclesService: VehiclesService, private router: Router) {
  }

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      model: new FormControl('', [Validators.required]),
      yearFrom: new FormControl('', [Validators.required]),
      yearTo: new FormControl('', [Validators.required]),
      bodyType: new FormControl('', [Validators.required]),
      mileage: new FormControl('', [Validators.required]),
      engine: new FormControl('', [Validators.required]),
      transmittion: new FormControl('', [Validators.required]),
      wheelDrive: new FormControl('', [Validators.required]),
      color: new FormControl('', [Validators.required]),
      priceFrom: new FormControl('', [Validators.required]),
      priceTo: new FormControl('', [Validators.required]),
      isNew: new FormControl(0, [Validators.required]),
      description: new FormControl('', [Validators.required])
    });
  }

  submit() {
    if (this.form.valid) {
      this.vehiclesService.postOrder({
        title: this.form.get('name').value.name ? this.form.get('name').value.name : this.form.get('name').value,
        description: this.form.get('description').value,
        price_from: this.form.get('priceFrom').value,
        price_to: this.form.get('priceTo').value,
        is_new: this.form.get('isNew').value,
        body_type: this.form.get('bodyType').value,
        mileage: this.form.get('mileage').value,
        engine: this.form.get('engine').value,
        transmittion: this.form.get('transmittion').value,
        wheel_drive: this.form.get('wheelDrive').value,
        color: this.form.get('color').value,
        model: this.form.get('model').value,
        year_from: this.form.get('yearFrom').value,
        year_to: this.form.get('yearTo').value
      }).subscribe((res: any) => {
        this.router.navigate(['/order-page', res._id]);
      });
    } else {
      this.validForm = false;
    }
  }
}
