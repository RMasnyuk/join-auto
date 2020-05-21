import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PostSellComponent} from './post-sell.component';
import {RouterModule} from '@angular/router';
import {AngularSvgIconModule} from 'angular-svg-icon';
import {AutocompleteLibModule} from 'angular-ng-autocomplete';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    PostSellComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: PostSellComponent}
    ]),
    AngularSvgIconModule,
    AutocompleteLibModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [PostSellComponent]
})
export class PostSellModule { }
