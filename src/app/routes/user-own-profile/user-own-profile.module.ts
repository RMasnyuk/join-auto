import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {AngularSvgIconModule} from 'angular-svg-icon';
import {SharedModule} from '../../shared/shared.module';
import {UserOwnProfileComponent} from './user-own-profile.component';
import {NgbNavModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    UserOwnProfileComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: UserOwnProfileComponent}
    ]),
    AngularSvgIconModule,
    SharedModule,
    NgbNavModule
  ],
  exports: [UserOwnProfileComponent]
})
export class UserOwnProfileModule { }
