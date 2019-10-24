import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { MainComponent } from "./main/main.component";
import { AccountEditComponent } from "./account-edit/account-edit.component";
import { CreateAccountComponent } from "./create-account/create-account.component";
import { AccountResolver } from "./resolvers/account.resolver";

export const routes: Routes = [
  {
    path: "",
    component: MainComponent,
    children: [
      {
        path: "createAccount",
        component: CreateAccountComponent
      }
    ]
  },
  {
    path: "editAccount/:id",
    component: AccountEditComponent,
    resolve: {
      account: AccountResolver
    }
  },
  { path: "**", redirectTo: "", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
