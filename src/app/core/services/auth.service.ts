import { Injectable } from "@angular/core";
// loaded once with the app
@Injectable({ providedIn: "root" })

// class for the service
export class AuthService {
    // token property is private
    private token!: string;

    // method to get token from the app
    getToken(): string {
        return this.token;
    }

    // method to login
    login(): void {
        this.token = "BulshitTokenForDevApp";
    }
}
