import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, map, throwError } from "rxjs";


@Injectable({
    providedIn: 'root'
})

export class AuIconService {


    constructor(readonly http: HttpClient) { }


    loadSvgFile(url: string): Observable<string> {
        return this.http.get(url, { responseType: 'text' })
            .pipe(
                catchError((error) => {
                    console.error(`Error loading SVG file: ${url}`, error);
                    return throwError(() => new Error('Failed to load SVG file'));
                }),
                map((svgContent: string) => svgContent)
            );
    }

}