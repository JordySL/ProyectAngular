import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ProductoService } from './../producto.service';
import { Producto } from './../models/producto';
@Component({
  selector: 'app-producto-edit',
  templateUrl: './producto-edit.component.html',
  styleUrls: ['./producto-edit.component.css']
})
export class ProductoEditComponent implements OnInit {
  item: Producto = new Producto(0, '', 0, 0, '', 0);
  constructor(public dialogRef: MatDialogRef<ProductoEditComponent>,private _service: ProductoService,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.getProductoById(this.data.id);
  }
  getProductoById(id: number): void {
    this._service.getProductoById(id)
      .subscribe((response: Producto) => {
        this.item = response
      });
  }
  updateProduct(): void {
    this._service.update(this.item)
      .subscribe((response: any) => this.dialogRef.close());
  }
}
