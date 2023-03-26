import { Product } from './../../product';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { ProductDetailComponent } from '../product-detail/product-detail.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements AfterViewInit {

  products: Product[] = [
    {
      name: "Webcam",
      price: 66

    },
    {
      name: "Microphone",
      price: 66

    },
    {
      name: "Wireless KeyBoard",
      price: 66

    },
  ]
  selectedProduct:Product|undefined;
  @ViewChild(ProductDetailComponent) productDetail: ProductDetailComponent | undefined;

  ngAfterViewInit(): void {
    if (this.productDetail) {
      console.log("this.productDetail product", this.productDetail.product);
    }
  }

  onBuy(selectedProduct: Product) {
    window.alert(`You just bought ${selectedProduct.name}!`);
  }

}
