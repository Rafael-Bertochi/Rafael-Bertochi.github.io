import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Ativo } from '../models/ativo';

@Injectable({
  providedIn: 'root'
})
export class AtivoService{
  baseUrl: String = environment.baseUrl;
  constructor(
  private http : HttpClient,
  private snack: MatSnackBar) { }

findAll():Observable<Ativo[]>{
  const url = this.baseUrl + "/ativo";
  return this.http.get<Ativo[]>(url);
}

findById(id : any):Observable<Ativo>{
  const url = `${this.baseUrl}/ativo/${id}`; 
  return this.http.get<Ativo>(url);
}

findByNome(nome : any):Observable<Ativo>{
  const url = `${this.baseUrl}/ativo/nome/${nome}`; 
  return this.http.get<Ativo>(url);
}
  

create (Ativo : Ativo):Observable<Ativo>{
  const url = this.baseUrl + "/ativo";
  return this.http.post<Ativo>(url, Ativo);
}

message(msg: String): void{
  this.snack.open(`${msg}`, 'OK', {
    horizontalPosition: 'end',
    verticalPosition: 'top',
    duration: 4000
  })
}
}
