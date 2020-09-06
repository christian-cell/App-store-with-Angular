import { NgModule } from '@angular/core';
import { CommonModule  } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './components/menu/menu.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/core/components/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductsComponent } from './components/shared/components/products/products.component';
import { ProductsGalleryComponent } from './components/pages/components/products-gallery/products-gallery.component';


@NgModule({
  declarations: [FooterComponent,  MenuComponent, HeaderComponent, ProductsComponent, ProductsGalleryComponent],
  imports: [
    
    CommonModule,
    RouterModule.forRoot( [] ),
    HttpClientModule,
    
    
  ],exports:[FooterComponent ,HeaderComponent]
})
export class CoreModule { }
