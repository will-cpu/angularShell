import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { CoreComponent } from './core.component';

const routes: Routes = [
  {
    path: "",
    component: CoreComponent,

    children: [
      {
        path: 'login',
        component: LoginComponent
      },
      { path: "f1", loadChildren: () => import('../feature/f1/f1.module').then(m => m.F1Module) }
    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }