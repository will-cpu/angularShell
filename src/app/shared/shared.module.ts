import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from './thirdParty/angular-material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AngularMaterialModule,
  ],
  exports:[
    AngularMaterialModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class SharedModule { }
