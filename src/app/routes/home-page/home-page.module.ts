import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomePageComponent} from './home-page.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AutocompleteLibModule} from 'angular-ng-autocomplete';
import {SharedModule} from '../../shared/shared.module';
import {NgbCollapseModule} from '@ng-bootstrap/ng-bootstrap';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    HomePageComponent
  ],
    imports: [
        CommonModule,
        FormsModule,
        AutocompleteLibModule,
        ReactiveFormsModule,
        SharedModule,
        NgbCollapseModule,
        RouterModule
    ],
  exports: [HomePageComponent]
})
export class HomePageModule { }
