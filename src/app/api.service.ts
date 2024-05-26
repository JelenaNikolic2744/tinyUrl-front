
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FullDataUrl, UrlModel } from './models';
import { tap } from 'rxjs';
import { AdminService } from './admin/allUrls/admin.service';

@Injectable()
export class APIService {
    constructor(
        private http: HttpClient,
        private adminService: AdminService
    ) { }

    headers = new HttpHeaders().set('Content-Type', 'application/json');

    getShortUrl(originalUrl: string) {
        return this.http.post<UrlModel>('http://localhost:3000/shortUrl', { originalUrl: originalUrl })
    }

    getPopularUrl() {
        return this.http.get<FullDataUrl[]>('http://localhost:3000/popularUrl').pipe(
            tap((urls) => {
                this.adminService.setUrls(urls);
            })
        );
    }
}
