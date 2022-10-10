import { NgModule } from "@angular/core";
import { SignInComponent } from "./signin/signin.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { VMessageModule } from "../shared/components/vmessages/vmessage.module";
import { RouterModule } from "@angular/router";
import { SignUpComponente } from "./signup/signup.component";


@NgModule({
    declarations: [
        SignInComponent,
        SignUpComponente
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        VMessageModule,
        RouterModule,        
    ]
})
export class HomeModule{}