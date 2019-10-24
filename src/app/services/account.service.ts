import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { tap, catchError } from "rxjs/operators";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { AccountData } from "src/models/budget";

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" })
};

const apiUrl = "http://localhost:8000/account/";

@Injectable()
export class AccountService {
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

  getAccount(id): Observable<AccountData> {
    return this.http.get<AccountData>(apiUrl + String(id));
  }

  addAccount(account): Observable<AccountData> {
    return this.http.post<AccountData>(apiUrl, account, httpOptions).pipe(
      tap((account: AccountData) =>
        console.log(`added product w/ id=${account.id}`)
      ),
      catchError(this.handleError<AccountData>("addAccount"))
    );
  }

  updateAccount(account): Observable<AccountData> {
    return this.http.put<AccountData>(
      apiUrl + account.id + "/",
      account,
      httpOptions
    );
  }
}
