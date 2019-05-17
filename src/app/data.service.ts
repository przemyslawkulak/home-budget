import { Injectable } from '@angular/core';
import { Account } from '../models/budget'
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  private accounts: Account[] = [];

  constructor(private http: HttpClient) { }

  allAcounts(): Account[] {
    const accountApi = this.http.get('http://localhost:8000/account/',)
    return this.accounts
  }

}


