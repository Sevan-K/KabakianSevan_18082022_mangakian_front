import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthModule } from "./auth/auth.module";
import { LoginComponent } from "./auth/components/login/login.component";
import { NotFoundComponent } from "./core/components/not-found/not-found.component";
import { LandingPageComponent } from "./landing-page/components/landing-page/landing-page.component";

const routes: Routes = [
    { path: "", component: LandingPageComponent },
    {
        path: "auth",
        loadChildren: () =>
            import("./auth/auth-routing.module").then(
                (module) => module.AuthRoutingModule
            ),
    },
    {
        path: "add",
        loadChildren: () =>
            import("./add-form/add-form.module").then(
                (module) => module.AddFormModule
            ),
    },
    {
        path: "library",
        loadChildren: () =>
            import("./manga-library/manga-library.module").then(
                (module) => module.MangaLibraryModule
            ),
    },
    { path: "**", pathMatch: "full", component: NotFoundComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
