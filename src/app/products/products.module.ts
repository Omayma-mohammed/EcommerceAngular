import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { ProductsDetailsComponent } from './components/products-details/products-details.component';
import { SharedModule } from '../shared/shared.module';
import { ProductComponent } from './components/product/product.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'



@NgModule({
  declarations: [
    AllProductsComponent,
    ProductsDetailsComponent,
    ProductComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    SharedModule,
    RouterModule,
    FormsModule
  ],
  exports : [
    AllProductsComponent,
    ProductsDetailsComponent
  ]
})
export class ProductsModule { }
