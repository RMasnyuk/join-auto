import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {VehiclesService} from '../../services/vehicles.service';

@Component({
  selector: 'app-user-own-profile',
  templateUrl: './user-own-profile.component.html',
  styleUrls: ['./user-own-profile.component.scss']
})
export class UserOwnProfileComponent implements OnInit {
  public data = {};
  public sharedProducts: Array<any> = [];
  public  ownProducts: Array<any> = [];

  constructor(
    private authService: AuthService,
    private vehiclesService: VehiclesService
  ) {
  }

  ngOnInit() {
    this.authService.getOwnProfileInfo().subscribe(res => {
      this.data = res;
    });
    this.vehiclesService.getUserProducts().subscribe((res: any) => {
      this.ownProducts = res.products;
    });
    this.vehiclesService.getUserSharedProducts().subscribe((res: any) => {
      this.sharedProducts = res.products;
    });
  }

}
