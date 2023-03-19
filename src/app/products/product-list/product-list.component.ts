import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  innerText:string = "hello productlist, you are working"
  currentStyle={
    color:"yellowgreen",
    fontSize:"100px"
  }
  constructor() { }

  ngOnInit(): void {
  }

}
