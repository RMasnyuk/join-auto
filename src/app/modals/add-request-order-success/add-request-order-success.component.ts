import { Component, OnInit } from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-request-order-success',
  templateUrl: './add-request-order-success.component.html',
  styleUrls: ['./add-request-order-success.component.scss']
})
export class AddRequestOrderSuccessComponent implements OnInit {

  constructor(
    public activeModal: NgbActiveModal
  ) { }

  ngOnInit() {
  }

}
