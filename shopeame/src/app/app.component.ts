import { Component } from '@angular/core';
import { ProductosService } from './services/productos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'shopeame';
  public productos : Array<any> = [];

  constructor(private productoService : ProductosService){
    this.productoService.getProductos().subscribe((resp:any) => {
      console.log(resp)
      this.productos = resp
    } )
  }
  
}
