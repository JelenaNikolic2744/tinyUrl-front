
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UrlModel } from './models';

@Injectable()
export class APIService {
    constructor(
        private http: HttpClient,
    ) { }

    headers = new HttpHeaders().set('Content-Type', 'application/json');

    getShortUrl(originalUrl: string) {

        return this.http.post<UrlModel>('http://localhost:3000/shortUrl', {originalUrl: originalUrl})
    }
}
