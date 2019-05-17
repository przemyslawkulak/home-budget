import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { AccountDetailsComponent } from './account-details/account-details.component';

const routes: Routes = [
  {path: '', component:MainComponent},
  {path: 'account', component:AccountDetailsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
