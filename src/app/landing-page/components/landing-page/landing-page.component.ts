import { Component, OnInit } from "@angular/core";
import { LoaderService } from "src/app/core/services/loader.service";

@Component({
    selector: "app-landing-page",
    templateUrl: "./landing-page.component.html",
    styleUrls: ["./landing-page.component.scss"],
})
export class LandingPageComponent implements OnInit {
    constructor(private loaderService: LoaderService) {}

    ngOnInit(): void {}

    // method to visit library
    onVisit() {
        console.log("function to visit library called");
    }
}
