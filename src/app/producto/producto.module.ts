import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductoListaComponent } from './producto-lista/producto-lista.component';
import { ProductoRoutingModule } from './producto-routing.module';
import { ProductoService } from './producto.service';
import {
  MatCardModule, MatPaginatorModule, MatButtonModule,
  MatToolbarModule, MatListModule
} from '@angular/material';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ProductoContainerComponent } from './producto-container/producto-container.component';
import { ProductoTablaComponent } from './producto-tabla/producto-tabla.component';

@NgModule({
  imports: [
    CommonModule,
    ProductoRoutingModule,
    MatCardModule, MatPaginatorModule, MatButtonModule,
    MatToolbarModule, MatListModule
  ],
  declarations: [ProductoListaComponent,
    SidebarComponent, ProductoContainerComponent, ProductoTablaComponent],
  providers: [ProductoService]
})
export class ProductoModule { }
