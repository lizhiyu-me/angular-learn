import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDescComponent } from './product-desc/product-desc.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';



@NgModule({
  declarations: [
    ProductListComponent,
    ProductDescComponent,
    ProductDetailComponent,
  ],
  imports: [
    CommonModule,
    ProductComponent
  ],
  exports:[
    ProductListComponent
  ]
})
export class ProductsModule { }
