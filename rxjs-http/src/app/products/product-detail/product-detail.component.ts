import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Product } from '../product';
import { Observable } from 'rxjs';
import { ProductsService } from '../products.service';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnChanges {

  constructor(private productService: ProductsService,public authService:AuthService) {

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

  changePrice(product: Product, price: number) {
    this.productService.updateProduct(product.id, price).subscribe(() => {
      alert('The price of ${product.name} was changed!');
    });
  }

  @Output() deleted = new EventEmitter();
  remove(product: Product) {
    this.productService.deleteProduct(product.id).subscribe(() => {
      this.deleted.emit();
    });
  }
}
