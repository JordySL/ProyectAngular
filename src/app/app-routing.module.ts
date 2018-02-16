import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
const appRouters: Routes = [
  { path: 'producto', loadChildren: 'app/producto/producto.module#ProductoModule' },
  { path: '', redirectTo: '/producto', pathMatch: 'full' }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRouters)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
