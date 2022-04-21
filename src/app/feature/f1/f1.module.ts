import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { F1Component } from './f1.component';
import { F1RoutingModule } from './f1-routing.module';



@NgModule({
  declarations: [
    F1Component
  ],
  imports: [
    CommonModule,
    F1RoutingModule,
  ]
})
export class F1Module { }
