import { Directive, TemplateRef, ViewContainerRef, OnInit } from '@angular/core';
import { ProductDetailComponent } from './product-detail/product-detail.component';

@Directive({
  selector: '[appTestDirectTempleteRef]'
})
export class TestDirectTempleteRefDirective implements OnInit {

  constructor(private templRef: TemplateRef<any>, private vc: ViewContainerRef) { }

  ngOnInit(): void {
    const productRef = this.vc.createComponent(ProductDetailComponent);
    productRef.setInput('product', {
      name: 'Optical mouse2222',
      price: 130
    });
  }

}
