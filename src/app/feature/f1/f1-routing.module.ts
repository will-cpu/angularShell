import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { F1Component } from './f1.component';

const routes: Routes = [
  {
    path: "",
    component: F1Component,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class F1RoutingModule { }
