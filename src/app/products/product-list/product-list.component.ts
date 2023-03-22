import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { ProductDetailComponent } from '../product-detail/product-detail.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements AfterViewInit {

  selectedProduct = 'Microphone';
  @ViewChild(ProductDetailComponent) productDetail: ProductDetailComponent | undefined;
  @ViewChild(ProductDetailComponent) productDetail1: ProductDetailComponent | undefined;

  ngAfterViewInit(): void {
    if (this.productDetail && this.productDetail1) {
      console.log("this.productDetail name",this.productDetail.name);
      console.log("this.productDetail1 name",this.productDetail1.name);
    }
  }

  onBuy(name:string) {
    window.alert(`You just bought ${name}!`);
  }

}
