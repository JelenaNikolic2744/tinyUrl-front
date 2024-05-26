import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { FullDataUrl } from "src/app/models";

@Injectable()
export class AdminService {

    urlsChanged = new Subject<FullDataUrl[]>();
    urls: any | FullDataUrl[] = []

    setUrls(urls: FullDataUrl[]) {
        this.urls = urls
        this.urlsChanged.next(this.urls.slice());
    }

    getUrls() {
        return this.urls.slice();
    }
}