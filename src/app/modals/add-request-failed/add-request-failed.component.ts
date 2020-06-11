import { Component, OnInit } from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-request-failed',
  templateUrl: './add-request-failed.component.html',
  styleUrls: ['./add-request-failed.component.scss']
})
export class AddRequestFailedComponent implements OnInit {

  constructor(
    public activeModal: NgbActiveModal
  ) { }

  ngOnInit() {
  }

}
