import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostOrderComponent } from './post-order.component';
import {RouterModule} from '@angular/router';
import {AngularSvgIconModule} from 'angular-svg-icon';
import {AutocompleteLibModule} from 'angular-ng-autocomplete';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    PostOrderComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: PostOrderComponent}
    ]),
    AngularSvgIconModule,
    AutocompleteLibModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [PostOrderComponent]
})
export class PostOrderModule { }
