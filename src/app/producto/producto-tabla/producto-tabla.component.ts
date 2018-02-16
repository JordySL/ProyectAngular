import { Component, OnInit } from '@angular/core';
import { ProductoService } from './../producto.service';
import { Producto } from './../models/producto';
@Component({
  selector: 'app-producto-tabla',
  templateUrl: './producto-tabla.component.html',
  styleUrls: ['./producto-tabla.component.css']
})
export class ProductoTablaComponent implements OnInit {

  items: Producto[] = [];
  NumeroRecords: number = 0;
  pageIndex: number = 0;
  pageSizeOptions: number[]=[10,20,30,40];
  pageSize: number = 0;
  constructor(public _productoService: ProductoService) {
  }

  ngOnInit() {
    this.getProductos(1, 10);
  }
  getProductos(offSet: Number, perPage: Number): void {
    this._productoService.getProductos(offSet, perPage)
      .subscribe((response: Producto[]) => { 
        this.NumeroRecords = response[0].total;
        this.items = response });
  }
  changePage(event: any): void{
    this.pageIndex = event.pageIndex;
    const pageSize = event.pageSize;
    const offset = event.pageIndex +1;
    this.getProductos(offset,pageSize);
  }
}
