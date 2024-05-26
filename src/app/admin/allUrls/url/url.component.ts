import { Component, Input } from '@angular/core';
import { FullDataUrl } from 'src/app/models';

@Component({
  selector: 'app-url',
  templateUrl: './url.component.html',
  styleUrls: ['./url.component.css']
})
export class UrlComponent {
  @Input() url: FullDataUrl;
}
