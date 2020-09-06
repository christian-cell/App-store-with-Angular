import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsPageRoutingModule } from './products-page-routing.module';
import { ProductsPageComponent } from './products-page.component';
import { ProductsGalleryComponent } from './components/products-gallery/products-gallery.component';


@NgModule({
  declarations: [ProductsPageComponent, ProductsGalleryComponent],
  imports: [
    CommonModule,
    ProductsPageRoutingModule
  ]
})
export class ProductsPageModule { }
