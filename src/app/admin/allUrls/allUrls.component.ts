import { Component } from '@angular/core';

@Component({
  selector: 'app-allUrls',
  templateUrl: './allUrls.component.html',
  styleUrls: ['./allUrls.component.css']
})
export class AllUrlsComponent {
  urlList = {
    popular: { originalUrl: "http://tmarkot.com", urlPart: "asd", url: "http://asd.com", numOfClicks: 3 }, all: [
      { originalUrl: "http://petar.com", urlPart: "asd", url: "http://asd.com", numOfClicks: 3 },
      { originalUrl: "http://ivan.com", urlPart: "asd", url: "http://asd.com", numOfClicks: 3 },
      { originalUrl: "http://milos.com", urlPart: "asd", url: "http://asd.com", numOfClicks: 3 },
      { originalUrl: "http://sanja.com", urlPart: "asd", url: "http://asd.com", numOfClicks: 3 }
    ]
  }

}
