
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HTTPService {
    constructor(private http: HttpClient) {}

    base_url='http://3.84.27.211'
  
    get(url: string) {
      return this.http.get(this.base_url+url);
    }
  
    post(url: string, data: any) {
      return this.http.post(this.base_url+url, data);
    }
  
    put(url: string, data: any) {
      return this.http.put(this.base_url+url, data);
    }
  
    delete(url: string) {
      return this.http.delete(this.base_url+url);
    }
  }
  
export class Abbonamento {
  id: number;
  giorno: number;
  mese: number;
  inizio: Date;
  fine: Date;
  costo: number;
  nome: string;
  descrizione: string;

  constructor(
    id: number,
    giorno: number,
    mese: number,
    inizio: string,
    fine: string,
    costo: number,
    nome: string,
    descrizione: string
  ) {
    this.id = id;
    this.giorno = giorno;
    this.mese = mese;
    this.inizio = new Date(Date.parse(inizio));;
    this.fine = new Date(Date.parse(fine));;
    this.costo = costo;
    this.nome = nome;
    this.descrizione = descrizione;
  }
}
export class Transazione {
  id: number;
  date: Date;
  abbonamento: number;
  costo: number;
  nome: string;
  descrizione: string;

  constructor(
    id: number,
    date: string,
    abbonamento: number,
    costo: number,
    nome: string,
    descrizione: string
  ) {
    this.id = id;
    this.date = new Date(Date.parse(date));
    this.abbonamento = abbonamento;
    this.costo = costo;
    this.nome = nome;
    this.descrizione = descrizione;
  }
}