import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {AutocompleteLibModule} from 'angular-ng-autocomplete';
import {SharedModule} from '../../shared/shared.module';
import {NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';
import {OrderListComponent} from './order-list.component';

@NgModule({
  declarations: [
    OrderListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: OrderListComponent}
    ]),
    ReactiveFormsModule,
    AutocompleteLibModule,
    SharedModule,
    NgbPaginationModule
  ],
  exports: [OrderListComponent]
})
export class OrderListModule { }
