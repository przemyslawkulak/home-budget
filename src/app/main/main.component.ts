import { Component, OnInit } from "@angular/core";
import { DataService } from "../services/data.service";
import { AccountData } from "../../models/budget";
import { AccountService } from "../services/account.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html"
})
export class MainComponent implements OnInit {
  accounts: AccountData[];
  message = "";

  constructor(
    private aS: DataService,
    private accountService: AccountService,
    public router: Router
  ) {
    console.log(router.url === "/");
    this.accountService.allAccounts().subscribe(
      data => {
        this.accounts = data;
        console.log(this.accounts);
      },
      error => {
        this.message = "Error. Try again later.";
        console.log(error);
      }
    );
  }

  ngOnInit() {}
}
