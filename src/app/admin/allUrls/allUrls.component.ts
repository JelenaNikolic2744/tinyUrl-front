import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FullDataUrl } from 'src/app/models';
import { AdminService } from './admin.service';

@Component({
  selector: 'app-allUrls',
  templateUrl: './allUrls.component.html',
  styleUrls: ['./allUrls.component.css']
})
export class AllUrlsComponent implements OnInit {
  urls: FullDataUrl[] = [];
  sub: Subscription;
  errorMessage =''

  constructor(private adminService: AdminService) { }

  ngOnInit() {
    this.urls = this.adminService.getUrls()
    this.sub = this.adminService.urlsChanged.subscribe(
      {
        next: (urls: FullDataUrl[]) => {
          this.urls = urls;
        },
        error: (error) => {
          this.errorMessage = error.error.message
          console.log(error)
        }
      }
    );
  }

  onClose() {
    this.errorMessage = '';
  }
}
