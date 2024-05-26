import { Component } from '@angular/core';
import { APIService } from '../api.service';

@Component({
  selector: 'app-tiny-url',
  templateUrl: './tiny-url.component.html',
  styleUrls: ['./tiny-url.component.css']
})
export class TinyUrlComponent {
  fullUrl = ''
  shortenedUrl = ''
  errorMessage = ''
  hasValue = false

  constructor(private apiService: APIService) { }

  shortURL() {
    this.apiService.getShortUrl(this.fullUrl).subscribe({
      next: (data) => {
        this.shortenedUrl = data.url
      },
      error: (error) => {
        this.errorMessage = error.error.message
        console.log(error)
      }
    })
  }

  onClose() {
    this.errorMessage = '';
    this.fullUrl = ''
  }

}
