import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDescComponent } from './product-desc/product-desc.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { SortPipe } from '../sort.pipe';
import { Filter1Pipe } from './filter1.pipe';
import { ProductHostDirective } from './product-host.directive';
import { PersmissionDirective } from './persmission.directive';
import { TestDirectTempleteRefDirective } from './test-direct-templete-ref.directive';



@NgModule({
  declarations: [
    ProductListComponent,
    ProductDescComponent,
    ProductDetailComponent,
    SortPipe,
    Filter1Pipe,
    ProductHostDirective,
    PersmissionDirective,
    TestDirectTempleteRefDirective
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
