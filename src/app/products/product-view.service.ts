import { Product } from './../product';
import { Injectable } from '@angular/core';
import { ProductsService } from './products.service';

@Injectable()
export class ProductViewService {

  constructor(private productService:ProductsService) { }

  private product:Product|undefined;

  getProduct(id:number){
    let products = this.productService.getProducts();
    if(!this.product){
      this.product = products[id];
    }
    return this.product;
  }
}
