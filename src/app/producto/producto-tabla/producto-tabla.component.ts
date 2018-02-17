import {
  Component, OnInit,
  ViewChild, TemplateRef, AfterViewInit, ChangeDetectorRef
} from '@angular/core';
import { ProductoService } from './../producto.service';
import { Producto } from './../models/producto';
@Component({
  selector: 'app-producto-tabla',
  templateUrl: './producto-tabla.component.html',
  styleUrls: ['./producto-tabla.component.css']
})
export class ProductoTablaComponent implements OnInit,
  AfterViewInit {

  items: Producto[] = [];
  NumeroRecords: number = 0;
  pageIndex: number = 0;
  pageSizeOptions: number[] = [10, 20, 30, 40];
  pageSize: number = 0;
  columns: object[] = [];
  @ViewChild('idLink') private idLink: TemplateRef<any>;
  constructor(public _productoService: ProductoService,
    public _changeDetector: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.getProductos(1, 10);
  }
  ngAfterViewInit(): void {
    this.columns = [
      { name: 'Id', prop: 'id', template: this.idLink },
      { name: 'Descripcion', prop: 'descripcion' },
      { name: 'StockMinimo', prop: 'stockMinimo' },
      { name: 'Fecha de Registro', prop: 'fechaRegistro' },
    ];
    this._changeDetector.detectChanges();
  }
  getProductos(offSet: Number, perPage: Number): void {
    this._productoService.getProductos(offSet, perPage)
      .subscribe((response: Producto[]) => {
        this.NumeroRecords = response[0].total;
        this.items = response
      });
  }
  changePage(event: any): void {
    this.pageIndex = event.pageIndex;
    const pageSize = event.pageSize;
    const offset = event.pageIndex + 1;
    this.getProductos(offset, pageSize);
  }
}
