import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {VehicleListComponent} from './vehicle-list.component';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {AutocompleteLibModule} from 'angular-ng-autocomplete';
import {SharedModule} from '../../shared/shared.module';
import {NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
   VehicleListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: VehicleListComponent}
    ]),
    ReactiveFormsModule,
    AutocompleteLibModule,
    SharedModule,
    NgbPaginationModule
  ],
  exports: [VehicleListComponent]
})
export class VehicleListModule { }
