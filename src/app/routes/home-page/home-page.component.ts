import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  public keywords = 'name';
  private form: FormGroup;
  public isCollapsed = false;
  public productsList = [];
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
  constructor() { }

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
    })
  }

  submit() {
    console.log(this.form)
  }

}
