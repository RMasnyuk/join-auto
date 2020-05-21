import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  public data = {name: ' Діма', email: 'joinauto2020@gmail.com', phoneNumber: ' +38 098 22 45 697', location: 'Івано-Франківськ'};

  constructor() {
  }

  ngOnInit() {
  }

}
