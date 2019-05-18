import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core'
import { Router } from '@angular/router';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  public accountForm = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
    balance: new FormControl(''),
})


  @Input() showMePartially: boolean;

  constructor(private router: Router, private api: DataService, private formBuilder: FormBuilder) { }

  toggleChild(){
    this.showMePartially = !this.showMePartially;
}

onFormSubmit(form:NgForm) {
  this.api.addAccount(form)
    .subscribe(res => {
        let id = res['_id'];
        this.router.navigate(['/account', id]);
      }, (err) => {
        console.log(err);
      });
}

  ngOnInit() {
    this.accountForm = this.formBuilder.group({
      'name' : [null, Validators.required],
      'description' : [null, Validators.required],
      'balance' : [null, Validators.required]
    });
  }

}
