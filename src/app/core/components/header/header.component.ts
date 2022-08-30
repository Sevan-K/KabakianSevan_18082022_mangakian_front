import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: "app-header",
    templateUrl: "./header.component.html",
    styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
    constructor(private router: Router) {}

    ngOnInit(): void {}

    onLogin() {
        console.log("login function called");
        this.router.navigateByUrl("/auth/login");
    }
}
