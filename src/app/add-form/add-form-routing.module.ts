import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AddFormComponent } from "./components/add-form/add-form.component";

const routes: Routes = [{ path: "", component: AddFormComponent }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AddFormRoutingModule {}
