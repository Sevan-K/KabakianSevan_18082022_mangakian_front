import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: "app-landing-page",
    templateUrl: "./landing-page.component.html",
    styleUrls: ["./landing-page.component.scss"],
})
export class LandingPageComponent implements OnInit {
    constructor(private router: Router) {}

    ngOnInit(): void {}

    // method to visit library
    onVisit() {
        // console.log("function to visit library called");
        this.router.navigateByUrl("library");
    }
}
