import {Component, OnInit} from '@angular/core';
import {VehiclesService} from '../../services/vehicles.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  public data = {};
  private userId = this.activatedRoute.snapshot.params.id;
  public productList: Array<any> = [];
  public referalToken;

  constructor(
    private vehiclesService: VehiclesService,
    private activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.vehiclesService.getUserAllProducts(this.userId).subscribe((res: any) => {
      this.productList = res.products;
      console.log(res)
    });

    this.vehiclesService.getUserInfo(this.userId).subscribe((res: any) => {
      this.data = res;
      this.referalToken = res.referal_token;
    });
  }

}
