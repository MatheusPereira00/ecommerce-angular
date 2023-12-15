import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { subCategory } from '../models/subcategory';

@Injectable({
  providedIn: 'root',
})
export class SubcategoriasService {
  public subCategoryUrl = 'http://localhost:3000/subcategorys';

  constructor(private http: HttpClient) {}

  public getSubCategorys(): Observable<subCategory[]> {
    return this.http.get<subCategory[]>(this.subCategoryUrl);
  }

  public getsubCategoryById(id: number): Observable<subCategory[]> {
    let url = this.subCategoryUrl;
    url += `?id=${id}`;
    return this.http.get<subCategory[]>(url);
  }

  public postsubCategory(newsubCategory: { name: string }): Observable<subCategory> {
    return this.http.post<subCategory>(this.subCategoryUrl, newsubCategory);
  }
  public updatesubCategory(
    id: number,
    newsubCategory: { name: string }
  ): Observable<subCategory> {
    let url = this.subCategoryUrl;
    url += `/${id}`;
    return this.http.patch<subCategory>(url, newsubCategory);
  }

  public deletesubCategory(id: number): Observable<subCategory> {
    let url = this.subCategoryUrl;
    url += `/${id}`;
    return this.http.delete<subCategory>(url);
  }
}
