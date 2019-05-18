import { Injectable } from '@angular/core';
import { Account } from '../models/budget'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  private accounts: Account[] = [
    {id:1, name:"Główne konto", account_balance:0.00}
  ];

  constructor(private http: HttpClient) { }

  allAcounts(): Observable<any> {
    return this.http.get('http://localhost:8000/account/',)
  }

}


