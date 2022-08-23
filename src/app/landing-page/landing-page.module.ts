import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LandingPageComponent } from "./components/landing-page/landing-page.component";
import { SharedModule } from "../shared/shared.module";

@NgModule({
    declarations: [LandingPageComponent],
    imports: [CommonModule, SharedModule],
    exports: [LandingPageComponent],
})
export class LandingPageModule {}
