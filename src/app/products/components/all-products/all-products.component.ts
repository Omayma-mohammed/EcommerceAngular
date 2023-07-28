import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {


  products : any[] = [];

  categories : any[] =[];

  loading:boolean = false;

  cartProducts : any[] =[];

  constructor( private service:ProductsService ) { }

  ngOnInit(): void {
    this.getProducts();
    this.getCategories();
  }


  getProducts() {
    this.loading = true;
    this.service.getAllProducts().subscribe( (res:any) => {
      this.loading = false;
      this.products = res;
      return console.log(res);
    } , error => {
      this.loading = false;
      alert('Error');
      console.log(error);
      document.write(error.message)
    } )
  }


  getCategories() {
    this.loading = true;
    this.service.getAllCategories().subscribe ( (res:any) => {
      this.loading = false;
      this.categories = res;
      return console.log(res);
    } , error => {
      this.loading = false;
      alert('Error');
      console.log(error);
      document.write(error.message)
    } )
  }


  filterCategory(event: { target: { value: any; }; }) {
    let value = event.target.value;
    if (value == "all") {
      this.getProducts();
    } else {
      this.changeCategory(value);
    }
    console.log(value); 
  }

  changeCategory(keyWord: any) {
    this.loading = true;
    this.service.getProductsByCategory(keyWord).subscribe( (res :any) => {
      this.loading = false;
      this.products = res;
      console.log(res);
    }, error => {
      this.loading = false;
      alert('Error');
      console.log(error);
      document.write(error.message)
    } )
  }

  addToCart ($event: any) {    
    if ("cart" in localStorage) {
      this.cartProducts = JSON.parse(localStorage.getItem("cart")!)
      let exist = this.cartProducts.find(item => item.item.id == $event.item.id)
      if(exist) {
        alert("This product is already in your cart");
      } else {
        this.cartProducts.push($event);
        localStorage.setItem("cart" , JSON.stringify(this.cartProducts));
      }
    }else {
      this.cartProducts.push($event);
      localStorage.setItem("cart" , JSON.stringify(this.cartProducts));
    }    
  }

}
