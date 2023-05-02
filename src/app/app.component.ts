import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'JvaisTangular';
  name = 'tesdt';
  
  constructor(private router: Router) {}

  navigateToFeatures() {
    this.router.navigate(['/features']);
  }

  navigateToContact() {
    this.router.navigate(['/contact']);
  }
}

