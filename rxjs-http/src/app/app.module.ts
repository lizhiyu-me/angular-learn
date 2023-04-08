import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductsModule } from './products/products.module';
import { ProductCreateComponent } from './product-create/product-create.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductCreateComponent
  ],
  imports: [
    BrowserModule,
    ProductsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
