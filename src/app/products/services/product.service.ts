import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  data : Product[] = [
    {id: 1, title: 'USB 16Gb', price: 130, createdAt: '04-03-2022', updatedAt: '04-03-2022'},
  ];

  getProducts() : Observable<any> {
    return this.http.get('http://localhost:5000/products');
  }

  constructor(private http: HttpClient) { }
}
