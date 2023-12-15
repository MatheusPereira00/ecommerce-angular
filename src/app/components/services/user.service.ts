import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { newUser } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}
  private UrlUsuario = 'http://localhost:3000/usuario';

  public getUser(): Observable<newUser[]> {
    return this.http.get<newUser[]>(this.UrlUsuario);
  }

  public postUser(user: newUser): Observable<newUser> {
    return this.http.post<newUser>(this.UrlUsuario, user);
  }
}
