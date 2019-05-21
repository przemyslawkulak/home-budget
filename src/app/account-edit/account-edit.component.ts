import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-account-edit',
  templateUrl: './account-edit.component.html',
  styleUrls: ['./account-edit.component.css']
})
export class AccountEditComponent implements OnInit {
  @Input() showMePartially: boolean;

  

  constructor() { }
  
  toggleChild(){
    this.showMePartially = !this.showMePartially;
}
  ngOnInit() {
  }

}
