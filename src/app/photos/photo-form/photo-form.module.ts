import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { VMessageModule } from "src/app/shared/components/vmessages/vmessage.module";
import { ImmediateCickModule } from "src/app/shared/directives/imediate-click/immediate-click.module";
import { PhotoModule } from "../photo/photo.module";
import { PhotoFormComponent } from "./photo-form.component";


@NgModule({
    declarations: [
        PhotoFormComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        VMessageModule,
        FormsModule,
        RouterModule,
        PhotoModule,
        ImmediateCickModule
    ]
})
export class PhotoFormModule {

}