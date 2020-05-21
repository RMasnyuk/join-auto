import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {LoginPageComponent} from './login-page.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    LoginPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: LoginPageComponent}
    ]),
    ReactiveFormsModule
  ],
  exports: [LoginPageComponent]
})
export class LoginPageModule { }
