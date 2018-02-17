import {
  Component, OnInit,
  Inject, Input
} from '@angular/core';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ProductoService } from './../producto.service'
@Component({
  selector: 'app-new-producto',
  templateUrl: './new-producto.component.html',
  styleUrls: ['./new-producto.component.css'],
  providers: [ProductoService]
})
export class NewProductoComponent implements OnInit {

  descripcion: string = "";
  stock: string = "";

  constructor(private _service: ProductoService,
    public dialogRef: MatDialogRef<NewProductoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() { }
  guardarProducto() {


    this._service.guardarProducto(this.descripcion, this.stock)
      .subscribe(() => {
        this.dialogRef.close();
      });
  }

}
