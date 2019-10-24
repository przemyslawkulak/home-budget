import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MainComponent } from "./main/main.component";
import { AccountDetailsComponent } from "./account-details/account-details.component";
import { CreateAccountComponent } from "./create-account/create-account.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AccountEditComponent } from "./account-edit/account-edit.component";
import { RouterModule, PreloadAllModules } from "@angular/router";
import { routes } from "./routes";
import { DataService } from "./services/data.service";
import { AccountService } from "./services/account.service";
import { AccountResolver } from "./resolvers/account.resolver";

const services: any[] = [AccountService, DataService];

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AccountDetailsComponent,
    CreateAccountComponent,
    AccountEditComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  providers: [...services, AccountResolver],
  bootstrap: [AppComponent]
})
export class AppModule {}
