import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn : 'root'
})
export class librosService{
    constructor(private http: HttpClient) {}

    getBooksData(): Observable<any> {
        return this.http.get('./assets/books.json');
    }

}