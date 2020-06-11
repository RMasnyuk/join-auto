import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {AddRequestFailedComponent} from './add-request-failed.component';


@NgModule({
  declarations: [
    AddRequestFailedComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    AddRequestFailedComponent
  ]
})
export class AddRequestFailedModule { }
