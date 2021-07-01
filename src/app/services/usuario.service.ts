import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  url = 'https://gorest.co.in/public-api/users';
  token = '9f4ae586670989e7410ba75cdf81b3e13261a9058030b31e17435680ca4b1014';
  constructor(private http: HttpClient) { }

  getUsuarios(): Observable<any>{
    return this.http.get<any>(this.url + '?access-token=' + this.token);
  }

  getUsuario(id: number){
    return this.http.get<any>(this.url + '/' + id + '?access-token=' + this.token);
  }
}
