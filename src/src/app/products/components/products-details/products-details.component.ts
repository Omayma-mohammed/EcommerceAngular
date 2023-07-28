import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.css']
})
export class ProductsDetailsComponent implements OnInit {


  id : any;

  data:any = {}


  loading:boolean = false;

  constructor( private route:ActivatedRoute , private service : ProductsService ) { 
    this.id = route.snapshot.paramMap.get("id");
    console.log(this.id);
    
  }


  ngOnInit(): void {
    this.getProducts();
  }

  
  getProducts() {
    this.loading = true;
    this.service.getDetails(this.id).subscribe( res => {
      this.loading = false;
      this.data = res;
      console.log(this.data);
    } , error => {
      console.log(error);
      this.loading = false;
      alert(error)
    } )
  }

}
