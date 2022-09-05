import { Injectable } from "@angular/core";
import { delay, interval, take, tap } from "rxjs";
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
        // passer le loader à true
        interval(1).pipe(
            take(1),
            tap(() => (this.token = "BulshitTokenForDevApp")),
            delay(2000)
            // passer le loader à false
        ).subscribe;
    }
}
