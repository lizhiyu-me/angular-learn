import { Injectable } from '@angular/core';
import { Observable, of ,map} from 'rxjs';
import { Product } from './product';
import { HttpClient } from '@angular/common/http';
interface ProductDTO {
  title: string;
  price: number;
}
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private productsUrl = 'https://fakestoreapi.com/products';
  constructor(private http:HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<ProductDTO[]>(this.productsUrl).pipe(
        map(products => products.map(product => {
          return {
            name: product.title,
            price: product.price
          }
    })) );
    }

}
