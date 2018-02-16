import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';
import { Producto } from './models/producto';
import { Observable } from 'rxjs/Observable';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class ProductoService {

  urlService: string = environment.urlService;

  constructor(private _http: Http) { }

  getProductos(offSet: Number, perPage: Number): Observable<Producto[]> 
  { const url = `${this.urlService}api/producto/GetProductos`;
    const params = { offSet: offSet, perPage: perPage }
    const header = new Headers({
      'Content-Type': 'application/json'
    });
    return this._http.post(url, params, { headers: header })
      .map((response: any) => {
        return response.json()
          .map((item: Producto) => Producto.mapFromResponse(item));
      });
  }
}
