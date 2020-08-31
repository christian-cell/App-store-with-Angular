import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  url = 'https://my-json-server.typicode.com/franlindebl/shopeame-api-v2/products'

  constructor(private http: HttpClient) {
    console.log('funciona')
  }

  getProductos(){
    let headers = new HttpHeaders()
    .set('Type-content','aplication/json')
    return this.http.get(this.url , {
      headers : headers
    } )
  }
}
