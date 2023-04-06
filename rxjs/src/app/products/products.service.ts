import { Injectable } from '@angular/core';
import { Product } from './product';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  getProducts(): Observable<Product[]> {
    return of(this.products);
  }

  products: Product[] = [
    {
      name: 'Webcam',
      price: 100
    },
    {
      name: 'Microphone',
      price: 200
    },
    {
      name: 'Wireless keyboard',
      price: 85
    }
  ];

}
