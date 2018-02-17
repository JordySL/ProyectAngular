import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductoListaComponent } from './producto-lista/producto-lista.component';
import { ProductoRoutingModule } from './producto-routing.module';
import { ProductoService } from './producto.service';
import {
  MatCardModule, MatPaginatorModule, MatButtonModule,
  MatToolbarModule, MatListModule,
  MatDialogModule
} from '@angular/material';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ProductoContainerComponent } from './producto-container/producto-container.component';
import { ProductoTablaComponent } from './producto-tabla/producto-tabla.component';
import { SharedModule } from './../shared/shared.module';
import { NewProductoComponent } from './new-producto/new-producto.component';
@NgModule({
  imports: [
    CommonModule,
    ProductoRoutingModule,
    MatCardModule, MatPaginatorModule, MatButtonModule,
    MatToolbarModule, MatListModule,
    SharedModule,
    MatDialogModule,FormsModule
  ],
  declarations: [ProductoListaComponent,
    SidebarComponent, ProductoContainerComponent, ProductoTablaComponent, 
    NewProductoComponent],
  providers: [ProductoService],
  entryComponents: [NewProductoComponent]
})
export class ProductoModule { }
