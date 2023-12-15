import { Injectable } from '@angular/core';
import { Product } from '../models/product-interface';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';
import { Category } from '../models/category';
@Injectable({
  providedIn: 'root',
})
export class CategoriasService {
  public categoryUrl = 'http://localhost:3000/categorys';

  constructor(private http: HttpClient) {}

  public getCategorys(): Observable<Category[]> {
    return this.http.get<Category[]>(this.categoryUrl);
  }

  public getAllProducts(pagina: number, limite: number): Observable<Product[]> {
    const API = `http://localhost:3000/categorys?_page=${pagina}&_limit=${limite}`;

    return this.http.get<Product[]>(API);
  }

  public getCategoryById(id: number): Observable<Category[]> {
    let url = this.categoryUrl;
    url += `?id=${id}`;
    return this.http.get<Category[]>(url);
  }

  public postCategory(newCategory: { name: string }): Observable<Category> {
    return this.http.post<Category>(this.categoryUrl, newCategory);
  }

  public updateCategory(id: number, newCategory: { name: string }): Observable<Category> {
    let url = this.categoryUrl;
    url += `/${id}`;
    return this.http.patch<Category>(url, newCategory);
  }

  public deleteCategory(id: number): Observable<Category> {
    let url = this.categoryUrl;
    url += `/${id}`;
    return this.http.delete<Category>(url);
  }
}
