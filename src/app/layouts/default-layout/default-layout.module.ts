import { NgModule } from '@angular/core';
import {DefaultLayoutComponent} from './default-layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {CommonModule} from '@angular/common';
import {AngularSvgIconModule} from 'angular-svg-icon';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    DefaultLayoutComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    AngularSvgIconModule,
    RouterModule
  ],
  exports: [
    DefaultLayoutComponent
  ]
})
export class DefaultLayoutModule { }
