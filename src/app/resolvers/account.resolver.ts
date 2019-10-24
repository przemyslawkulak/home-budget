import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { AccountService } from "../services/account.service";
import { AccountData } from "src/models/budget";

@Injectable({ providedIn: "root" })
export class AccountResolver implements Resolve<Observable<AccountData>> {
  constructor(private readonly _accountService: AccountService) {}
  resolve(route: ActivatedRouteSnapshot) {
    console.log(route.params.id);
    return this._accountService.getAccount(route.params.id);
  }
}
