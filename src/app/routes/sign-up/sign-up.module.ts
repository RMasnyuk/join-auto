import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {SignUpComponent} from './sign-up.component';


@NgModule({
  declarations: [
    SignUpComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: SignUpComponent}
    ]),
    ReactiveFormsModule
  ],
  exports: [SignUpComponent]
})
export class SignUpModule { }
