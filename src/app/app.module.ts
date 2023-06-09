import { FilterPipe } from './filter.pipe';
import { ProductsModule } from './products/products.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HousingListComponent } from './housing-list/housing-list.component';
import { SortPipe } from './sort.pipe';
import { filter } from 'rxjs';
import { CopyrightDirective } from './copyright.directive';
import { NumericDirective } from './numeric.directive';
import { PersmissionDirective } from './products/persmission.directive';
import { FavoritesComponent } from './products/favorites/favorites.component';

@NgModule({
  declarations: [
    AppComponent,
    HousingListComponent,
    CopyrightDirective,
    NumericDirective
  ],
  imports: [
    BrowserModule,
    ProductsModule,
    FilterPipe
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
