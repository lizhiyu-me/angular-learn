import { ProductViewService } from './../product-view.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css'],
  providers: [ProductViewService],
})
export class ProductViewComponent implements OnInit {
  @Input() id = -1;
  name: string = "";
  constructor(private productViewService: ProductViewService) { }

  ngOnInit() {
    let product = this.productViewService.getProduct(this.id);
    this.name = product.name;
  }
}
