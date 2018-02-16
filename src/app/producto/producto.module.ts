import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductoListaComponent } from './producto-lista/producto-lista.component';
import { ProductoRoutingModule } from './producto-routing.module';
@NgModule({
  imports: [
    CommonModule,
    ProductoRoutingModule
  ],
  declarations: [ProductoListaComponent]
})
export class ProductoModule { }
