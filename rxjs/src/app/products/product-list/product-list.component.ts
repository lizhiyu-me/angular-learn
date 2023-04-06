import { AfterViewInit, Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { Product } from '../product';
import { ProductsService } from '../products.service';
import { Subscription, Subject, Observable } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers: [ProductsService]
})
export class ProductListComponent implements OnInit, AfterViewInit {

  selectedProduct: Product | undefined;
  @ViewChild(ProductDetailComponent) productDetail: ProductDetailComponent | undefined;
  products: Product[] = [];
  products$: Observable<Product[]> | undefined;

  constructor(private productService: ProductsService) { }
  private productsSub: Subscription | undefined;

  ngOnInit(): void {
    // this.products = this.productService.getProducts();
    this.getProducts();
  }

  ngAfterViewInit(): void {
    if (this.productDetail) {
      console.log(this.productDetail.product);
    }
  }

  private getProducts() {
    this.products$ = this.productService.getProducts();
  }


  onBuy() {
    window.alert(`You just bought ${this.selectedProduct?.name}!`);
  }

  ngOnDestroy(): void {
    this.productsSub?.unsubscribe();
  }

}
