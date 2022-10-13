import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { startWith } from "rxjs/operators";
import { loadingType } from "./loading-type";

@Injectable({ providedIn: 'root'})
export class LoadingService {

    loadingSubject: Subject<loadingType> = new Subject<loadingType>();

    getLoading() {
        return this.loadingSubject
            .asObservable()
            .pipe(startWith(loadingType.STOPPED));
    }

    start() {
        this.loadingSubject.next(loadingType.LOADING);
    }

    stop() {
        this.loadingSubject.next(loadingType.STOPPED);
    }
}