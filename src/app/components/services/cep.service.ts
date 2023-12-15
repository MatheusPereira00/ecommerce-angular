import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { cep } from '../models/cep';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CepService {
  constructor(private http: HttpClient) {}

  public getCep(cep: string): Observable<cep> {
    const urlGet = `http://viacep.com.br/ws/${cep}/json`;
    return this.http.get<cep>(urlGet);
  }
}
