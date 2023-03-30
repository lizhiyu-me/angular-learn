import { ProductsService } from './../products.service';
import { Product } from './../../product';
import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { ProductDetailComponent } from '../product-detail/product-detail.component';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements AfterViewInit, OnInit {
    constructor(private productsService: ProductsService) {

    }
    ngOnInit(): void {
        this.products = this.productsService.getProducts();
    }
    products: Product[] = [];
    today: Date = new Date();
    selectedProduct: Product | undefined;
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
