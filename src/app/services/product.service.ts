import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Product } from '../models/product.model';

const baseUrl ='https://localhost:7224/api/Product'
@Injectable({
  providedIn: 'root'
})
export class productService {constructor(private http:HttpClient) { }
getAll(): Observable<Product[]> {
  return this.http.get<Product[]>(baseUrl);
}
get(id: any): Observable<Product> {
  return this.http.get<Product>(`${baseUrl}/${id}`);
}
create(data: any): Observable<any> {
  return this.http.post(baseUrl, data);
}
update(  data: any): Observable<any> {
  return this.http.put(`${baseUrl}`, data);
}
delete(id: number): Observable<any> {
  return this.http.delete(`${baseUrl}/${id}`);
}
deleteAll(): Observable<any> {
  return this.http.delete(baseUrl);
}

findByTitle(ProductName: any): Observable<Product[]> {
  return this.http.get<Product[]>(`${baseUrl}?ProductName=${ProductName}`);
}
}
