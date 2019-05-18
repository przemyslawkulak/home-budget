import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core'

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {
  @Input() showMePartially: boolean;
  constructor() { }

  toggleChild(){
    this.showMePartially = !this.showMePartially;
}

  ngOnInit() {
  }

}
