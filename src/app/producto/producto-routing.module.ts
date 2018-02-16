import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ProductoListaComponent } from './producto-lista/producto-lista.component';
const productoRouters: Routes = [
  {
    path: '', children: [
      { path: '', redirectTo: 'producto-lista', pathMatch: 'full' },
      { path: 'producto-lista', component: ProductoListaComponent }
    ]
  }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(productoRouters)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class ProductoRoutingModule { }
