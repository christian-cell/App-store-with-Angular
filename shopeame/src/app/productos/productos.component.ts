import { Component, OnInit ,Input } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {

  @Input() productos:Array<any> = []

  constructor() { }

  ngOnInit(): void {
  }

}
