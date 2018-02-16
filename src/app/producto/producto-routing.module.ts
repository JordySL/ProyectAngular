import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ProductoListaComponent } from './producto-lista/producto-lista.component';
import { ProductoContainerComponent } from './producto-container/producto-container.component';
import { ProductoTablaComponent } from './producto-tabla/producto-tabla.component';
const productoRouters: Routes = [
  {
    path: '', component: ProductoContainerComponent, children: [
      { path: '', redirectTo: '', pathMatch: 'full' },
      { path: 'productoCartas', component: ProductoListaComponent },
      { path: 'productoTabla', component: ProductoTablaComponent }
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
