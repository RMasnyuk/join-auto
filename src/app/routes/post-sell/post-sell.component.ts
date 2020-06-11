import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {VehiclesService} from '../../services/vehicles.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-post-sell',
  templateUrl: './post-sell.component.html',
  styleUrls: ['./post-sell.component.scss']
})
export class PostSellComponent implements OnInit {
  public photosList = [];
  public keywords = 'name';
  public validForm = true;
  disablePromotionField = false;
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

  engineData = [
    {
      id: 1,
      name: '1.5'
    },
    {
      id: 2,
      name: '2.0'
    },
    {
      id: 3,
      name: '2.2'
    }
  ];


  constructor(private vehiclesService: VehiclesService, private router: Router) {
  }

  addPhoto(event) {
    this.photosList.push(event.target.files[0]);
  }

  removePhoto(index) {
    this.photosList.splice(index, 1);
  }

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      model: new FormControl('', [Validators.required]),
      year: new FormControl('', [Validators.required]),
      bodyType: new FormControl('', [Validators.required]),
      mileage: new FormControl('', [Validators.required]),
      engine: new FormControl('', [Validators.required]),
      transmittion: new FormControl('', [Validators.required]),
      wheelDrive: new FormControl('', [Validators.required]),
      color: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required]),
      isNew: new FormControl(0, [Validators.required]),
      allowPromote: new FormControl(1, [Validators.required]),
      compensation: new FormControl({value: '', disabled: false}),
      description: new FormControl('', [Validators.required])
    });
  }

  submit() {
    if (this.form.valid && this.photosList.length) {
      let formData: any = new FormData();
      this.photosList.forEach((image, index) => {
        const key = `images`;
        formData.append(key, image);
      });
      formData.append('description', this.form.get('description').value);
      formData.append('price', this.form.get('price').value);
      formData.append('is_new', this.form.get('isNew').value);
      formData.append('available_for_promote', this.form.get('allowPromote').value);
      if (this.form.get('compensation').value && this.form.get('allowPromote').value === 1) {
        formData.append('promote_compensation_type', this.form.get('compensation').value);
      }
      formData.append('body_type', this.form.get('bodyType').value);
      formData.append('mileage', this.form.get('mileage').value);
      formData.append('engine', this.form.get('engine').value);
      formData.append('transmittion', this.form.get('transmittion').value);
      formData.append('wheel_drive', this.form.get('wheelDrive').value);
      formData.append('color', this.form.get('color').value);
      formData.append('brand', this.form.get('name').value.name ? this.form.get('name').value.name : this.form.get('name').value);
      formData.append('model', this.form.get('model').value);
      formData.append('year', this.form.get('year').value);


      this.vehiclesService.postVehicle(formData
        // description: this.form.get('description').value,
        // price: this.form.get('price').value,
        // is_new: this.form.get('isNew').value,
        // available_for_promote: this.form.get('allowPromote').value,
        // promote_compensation_type: this.form.get('compensation').value,
        // body_type: this.form.get('bodyType').value,
        // mileage: this.form.get('mileage').value,
        // engine: this.form.get('engine').value,
        // transmittion: this.form.get('transmittion').value,
        // wheel_drive: this.form.get('wheelDrive').value,
        // color: this.form.get('color').value,
        // images: this.photosList,
        // brand: this.form.get('name').value.name,
        // model: this.form.get('model').value,
      ).subscribe((res: any) => this.router.navigate(['/product-page', res._id]));
    } else {
      this.validForm = false;
    }
  }

  allowPromote(value: boolean) {
    if (value) {
      this.form.get('compensation').enable();
    } else {
      this.form.get('compensation').disable();
    }
  }
}
