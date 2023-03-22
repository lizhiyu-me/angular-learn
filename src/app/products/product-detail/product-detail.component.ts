import { Component, Input,OnInit, Output, EventEmitter, OnChanges, SimpleChanges, ViewEncapsulation,ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
  encapsulation:ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductDetailComponent implements OnChanges,OnInit {
  constructor() {
    console.log(`Name is ${this.name} in the constructor`);
  }

  @Input() name:string = '';
  @Output() bought = new EventEmitter();
  ngOnInit():void{
    console.log(`Name is ${this.name} in the ngOnInit`);
  }
  ngOnChanges(changes: SimpleChanges): void {
    const product = changes['name'];
    console.log("changes ",changes);
    if (!product.isFirstChange()) {
      const oldValue = product.previousValue;
      const newValue = product.currentValue;
      console.log(`Product changed from ${oldValue} to ${newValue}`);
    }
  }

  buy() {
    this.bought.emit(this.name);
  }

  get productName(): string {
    console.log(`Geet ${this.name}`);
    return this.name;
  }

}
