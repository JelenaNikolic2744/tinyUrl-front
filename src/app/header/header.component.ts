import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { APIService } from '../api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(
    private router: Router, private apiService: APIService
  ) {
  }

  onAdmin() {
    this.apiService.getPopularUrl().subscribe()
    this.router.navigate(['/admin']);
  }

  onShortUrl() {
    this.router.navigate(['']);
  }
}
