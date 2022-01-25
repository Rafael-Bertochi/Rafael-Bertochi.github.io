import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Ordem } from '../models/ordem';

@Injectable({
  providedIn: 'root'
})
export class OrdemService {

  baseUrl: String = environment.baseUrl;
  constructor(
    private http : HttpClient,
    private snack: MatSnackBar) { }
  
  findAll():Observable<Ordem[]>{
    const url = this.baseUrl + "/ordem";
    return this.http.get<Ordem[]>(url);
  }

  findById(id : any):Observable<Ordem>{
    const url = `${this.baseUrl}/ordem/${id}`; 
    return this.http.get<Ordem>(url);
  }  

  create (ordem : Ordem):Observable<Ordem>{
    const url = this.baseUrl + "/ordem";
    return this.http.post<Ordem>(url, ordem);
  }
  findOrdemByAtivo (id : any):Observable<Ordem[]>{
    const url = `${this.baseUrl}/ordem/ativo/${id}`;
    return this.http.get<Ordem[]>(url);
  }

  message(msg: String): void{
    this.snack.open(`${msg}`, 'OK', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 4000
    })
  }
}
