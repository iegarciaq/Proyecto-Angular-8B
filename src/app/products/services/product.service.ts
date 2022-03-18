import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  getProducts() : Observable<Product[]> {
    return this.http.get<Product[]>('http://localhost:5000/products');
  }

  addProduct(product : Product){
    return this.http.post('http://localhost:5000/products', product);
  }
  
  deleteProduct(id: number){ 
    return this.http.delete(`http://localhost:5000/products/${id}`);

  }

  constructor(private http: HttpClient) { }
}
