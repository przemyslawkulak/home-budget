import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Account} from '../../models/budget'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  showVar: String = 'None';

    // editOrCreate(){
    //     this.showVar = !this.showVar;
    // }

  accounts: Account[];
  message: String = '';


  constructor(private aS:DataService) { }

  ngOnInit() {
    this.aS.allAccounts().subscribe(
      (data)=>{
        this.accounts = data;
      },
      (error) => {
        this.message = "Error. Try again later.";
        console.log(error);
      }
      );
    console.table(this.accounts)
  }


}
