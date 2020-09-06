import { Component, OnInit } from '@angular/core';
import { FormBuilder} from '@angular/forms';
import { ProductsLocalService } from '../../shared/services/local/products-local.service';




@Component({
  selector: 'app-management-page',
  templateUrl: './management-page.component.html',
  styleUrls: ['./management-page.component.scss']
})



export class ManagementPageComponent implements OnInit {
  formGroupManagementPage;

  constructor(private formBuilder : FormBuilder ,private productLocalService:ProductsLocalService ) { }

  ngOnInit(): void {
    this.formGroupManagementPage = this.formBuilder.group({
      name: ['Tus gafas'],
      description: ['Increibles gafas Rayban'],
      price : ['5'],
      image : ['https://www.robertomartin.com/fotos-gafas/2012/05/ray-ban-aviator-tallas-y-tamanos.jpg'],
      stars : ['5']
    })
  }

  addProduct(){
    this.productLocalService.addProducts([this.formGroupManagementPage.value])
  }

}
