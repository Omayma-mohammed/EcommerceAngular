import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AllProductsComponent } from '../products/components/all-products/all-products.component';
import { ProductsDetailsComponent } from '../products/components/products-details/products-details.component';
import { CartComponent } from '../carts/components/cart/cart.component';
import { SignUpComponent } from '../shared/components/sign-up/sign-up.component';
import { ErrorComponent } from '../shared/components/error/error.component';


const routes : Routes = [
  {path: '' , component:AllProductsComponent},
  {path: 'all-products' , component : AllProductsComponent},
  {path: 'products-detail/:id' , component : ProductsDetailsComponent},
  {path: 'cart' , component : CartComponent},
  {path: 'signUp' , component:SignUpComponent},
  {path: '**' , component : ErrorComponent}
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports : [
    RouterModule
  ]
})
export class AppRoutingModule { }
