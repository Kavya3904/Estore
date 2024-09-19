import { NgModule } from "@angular/core";
import { LoginComponent } from "./components/login/login.component";
import { SigninComponent } from "./components/signin/signin.component";
import { HomeComponent } from "./components/home/home.component";
import { CoreRoutingModule } from "./core-routing.module";

@NgModule ({
    declarations:[
        LoginComponent,
        SigninComponent,
        HomeComponent
    ],
    imports:[CoreRoutingModule],
   
})

export class Coremodule{

}