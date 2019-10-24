import { Component, OnInit } from "@angular/core";
import { Input } from "@angular/core";
import { Router } from "@angular/router";
import {
  FormControl,
  FormGroupDirective,
  FormBuilder,
  FormGroup,
  NgForm,
  Validators
} from "@angular/forms";
import { DataService } from "../services/data.service";
import { AccountService } from "../services/account.service";

@Component({
  selector: "app-create-account",
  templateUrl: "./create-account.component.html"
})
export class CreateAccountComponent implements OnInit {
  public accountForm = new FormGroup({
    name: new FormControl(""),
    description: new FormControl(""),
    account_balance: new FormControl("")
  });

  constructor(
    private router: Router,
    private accountService: AccountService,
    private formBuilder: FormBuilder
  ) {}

  onFormSubmit(form: NgForm) {
    this.accountService.addAccount(form).subscribe(
      data => {
        const id = data.id;
        this.router.navigate(["account", id]);
      },
      err => {
        console.log(err);
      }
    );
  }

  ngOnInit() {
    this.accountForm = this.formBuilder.group({
      name: [null, Validators.required],
      description: [""],
      account_balance: [0.0]
    });
  }
}
