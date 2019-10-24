import { Injectable } from "@angular/core";
import { AccountData } from "../../models/budget";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of, throwError } from "rxjs";
import { catchError, tap, map } from "rxjs/operators";

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" })
};
const apiUrl = "http://localhost:8000/account/";

@Injectable({
  providedIn: "root"
})
export class DataService {
  private accounts: AccountData[] = [
    { id: 1, name: "Główne konto", account_balance: 0.0 }
  ];

  constructor(private http: HttpClient) {}

  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

  allAccounts(): Observable<any> {
    return this.http.get(apiUrl);
  }
  allTransaction(): Observable<any> {
    return this.http.get("http://localhost:8000/transaction/");
  }

  addAccount(account): Observable<AccountData> {
    return this.http.post<AccountData>(apiUrl, account, httpOptions).pipe(
      tap((account: AccountData) =>
        console.log(`added product w/ id=${account.id}`)
      ),
      catchError(this.handleError<AccountData>("addAccount"))
    );
  }
}
