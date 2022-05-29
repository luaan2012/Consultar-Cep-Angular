import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cep } from 'src/app/models/Cep';

@Injectable({
  providedIn: 'root'
})
export class CepsService {

constructor(private http: HttpClient) { }

getCep(cep: string): Observable<Cep> {
  return this.http.get<Cep>(`https://viacep.com.br/ws/${cep}/json/`)
}

}
