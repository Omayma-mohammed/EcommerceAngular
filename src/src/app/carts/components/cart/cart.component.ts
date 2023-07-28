import { Component, OnInit } from '@angular/core';
import { CartsService } from '../../services/carts.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartProducts : any =[];

  total : any = 0;

  loading : boolean = true;

  success : boolean = false;

  constructor(private service:CartsService) { }

  ngOnInit(): void {
    this.getValuesToCart();
  }
  
  getValuesToCart () {
    this.loading = true;
    if ("cart" in localStorage) {
      this.cartProducts = JSON.parse(localStorage.getItem("cart")!)
      }  
    this.loading = false;
    this.getCartTotal();
  }

  getCartTotal() {
    this.total = 0;
    for(let x in this.cartProducts) {
      this.total += this.cartProducts[x].item.price * this.cartProducts[x].quantity;
      }
    }


    plusSign (index : number) {
      this.cartProducts[index].quantity++;
      this.getCartTotal();
      localStorage.setItem("cart" , JSON.stringify(this.cartProducts));
    }

    
    minusSign (index : number) {
      this.cartProducts[index].quantity--;
      this.getCartTotal();
      localStorage.setItem("cart" , JSON.stringify(this.cartProducts));
    }


    detectChanges() {
      this.getCartTotal()
      localStorage.setItem("cart" , JSON.stringify(this.cartProducts));
    }


    deleteProduct(index) {
      this.cartProducts.splice(index, 1);
      this.getCartTotal();
      localStorage.setItem("cart" , JSON.stringify(this.cartProducts));
    }


    clearCart() {
      this.cartProducts = [];
      this.getCartTotal();
      localStorage.setItem("cart" , JSON.stringify(this.cartProducts));
    }


    addNewCart() {
      let products = this.cartProducts.map((item : any) => {
        return { productId : item.item.id , quantity : item.quantity }
      })
      let model = {
        userId : 5,
        date : new Date(),
        products : products
      }
      
      this.service.addCart(model).subscribe(result => {
        this.success = true;        
      })
      console.log(model);
      
    }


}
