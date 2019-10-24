import { Component, OnInit, Input } from "@angular/core";
import { FormGroup, FormControl, NgForm } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { AccountService } from "../services/account.service";
import { AccountData } from "src/models/budget";

@Component({
  selector: "app-account-edit",
  templateUrl: "./account-edit.component.html"
})
export class AccountEditComponent implements OnInit {
  private account: AccountData;
  public accountForm = new FormGroup({
    id: new FormControl(""),
    name: new FormControl(""),
    description: new FormControl(""),
    account_balance: new FormControl("")
  });
  constructor(
    private route: ActivatedRoute,
    private accountService: AccountService,
    private router: Router
  ) {
    this.account = this.route.snapshot.data.account;
    this.accountForm.setValue({
      id: this.account.id,
      name: this.account.name,
      description: this.account.description,
      account_balance: this.account.account_balance
    });
    console.log(this.account);
  }

  ngOnInit() {}

  onFormSubmit(form: NgForm) {
    console.log(form);
    this.accountService.updateAccount(form).subscribe(
      data => {
        const id = data.id;
        this.router.navigate(["account", id]);
      },
      err => {
        console.log(err);
      }
    );
  }
}
