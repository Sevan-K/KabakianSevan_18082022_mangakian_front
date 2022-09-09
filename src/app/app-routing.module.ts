import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NotFoundComponent } from "./core/components/not-found/not-found.component";
import { LandingPageComponent } from "./landing-page/components/landing-page/landing-page.component";

const routes: Routes = [
    { path: "", component: LandingPageComponent },
    {
        path: "add",
        loadChildren: () =>
            import("./add-form/add-form.module").then(
                (module) => module.AddFormModule
            ),
    },
    { path: "**", pathMatch: "full", component: NotFoundComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
