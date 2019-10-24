import { Component, OnInit } from "@angular/core";
import { DataService } from "../services/data.service";
import { Transaction } from "src/models/budget";

@Component({
  selector: "app-account-details",
  templateUrl: "./account-details.component.html"
})
export class AccountDetailsComponent implements OnInit {
  public allTransaction: any;
  public firstTransaction: Transaction;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.allTransaction().subscribe(data => {
      this.allTransaction = data;
      console.log(data);
    });
  }
}
