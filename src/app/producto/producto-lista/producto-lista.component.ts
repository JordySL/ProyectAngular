import { Component, OnInit } from '@angular/core';
import { ProductoService } from './../producto.service';
import { Producto } from './../models/producto';
@Component({
  selector: 'app-producto-lista',
  templateUrl: './producto-lista.component.html',
  styleUrls: ['./producto-lista.component.css']
})
export class ProductoListaComponent implements OnInit {

  items: Producto[] = [];
  constructor(public _productoService: ProductoService) {
  }

  ngOnInit() {
    this.getProductos(1, 9);
  }
  getProductos(offSet: Number, perPage: Number): void {
    this._productoService.getProductos(offSet, perPage)
      .subscribe((response: Producto[]) => { this.items = response });
  }
}
