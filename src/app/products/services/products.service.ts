import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) {}


  url : any = environment.baseApi

  getAllProducts () {
    return this.http.get( this.url + 'products');
  }



  getAllCategories() {
    return this.http.get(this.url + 'products/categories');
  }

  getProductsByCategory (keyWord :any) {
    return this.http.get(this.url + 'products/category/' + keyWord)
  }


  getDetails(id: string) {
    return this.http.get(this.url + 'products/' + id);
  }


}
