import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {UserProfileComponent} from './user-profile.component';
import {AngularSvgIconModule} from 'angular-svg-icon';
import {SharedModule} from '../../shared/shared.module';


@NgModule({
  declarations: [
   UserProfileComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: UserProfileComponent}
    ]),
    AngularSvgIconModule,
    SharedModule
  ],
  exports: [UserProfileComponent]
})
export class UserProfileModule { }
