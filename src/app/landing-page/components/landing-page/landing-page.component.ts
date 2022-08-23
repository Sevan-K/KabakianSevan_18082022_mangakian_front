import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-landing-page",
    templateUrl: "./landing-page.component.html",
    styleUrls: ["./landing-page.component.scss"],
})
export class LandingPageComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}

    // function to visit library
    onVisit() {
        console.log("function to visit library called");
    }
}
