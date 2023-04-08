import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Product } from '../product';
import { Observable } from 'rxjs';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnChanges {

  constructor(private productService: ProductsService){

  }
  @Input() product: Product | undefined;
  @Output() bought = new EventEmitter();

  @Input() id = -1;
  product$: Observable<Product> | undefined;

  ngOnChanges(): void {
    this.product$ = this.productService.getProduct(this.id);
  }

  buy() {
    this.bought.emit();
  }

}
