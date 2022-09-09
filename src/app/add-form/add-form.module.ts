import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AddFormRoutingModule } from "./add-form-routing.module";
import { AddFormComponent } from "./components/add-form/add-form.component";
import { SharedModule } from "../shared/shared.module";

@NgModule({
    declarations: [AddFormComponent],
    imports: [CommonModule, AddFormRoutingModule, SharedModule],
})
export class AddFormModule {}
