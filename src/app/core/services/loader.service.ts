import { Injectable } from "@angular/core";
import {
    BehaviorSubject,
    delay,
    interval,
    Observable,
    of,
    take,
    tap,
} from "rxjs";
@Injectable({ providedIn: "root" })
export class LoaderService {
    // private behaviour subject
    private _loading$ = new BehaviorSubject<boolean>(false);
    // public getter to be used as an observable
    public get loading$(): Observable<boolean> {
        return this._loading$.asObservable();
    }

    // private function to set loading status
    private setLoadingStatus(loading: boolean): void {
        this._loading$.next(loading);
    }

    // method simulating loading and returning true as an observable
    simulateLoading$(): Observable<number> {
        this.setLoadingStatus(true);
        return interval(2000).pipe(
            take(1),
            tap(() => this.setLoadingStatus(false))
        );
    }
}
