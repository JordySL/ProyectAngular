import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductoListaComponent } from './producto-lista/producto-lista.component';
import { ProductoRoutingModule } from './producto-routing.module';
import { ProductoService } from './producto.service';
@NgModule({
  imports: [
    CommonModule,
    ProductoRoutingModule
  ],
  declarations: [ProductoListaComponent],
  providers: [ProductoService]
})
export class ProductoModule { }
