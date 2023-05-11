import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api-service.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  photoUrl: any | null = null;

  constructor(private apiService: ApiService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.apiService.getRandomPhoto().subscribe(photo => {
      let objectURL = URL.createObjectURL(photo);
      this.photoUrl = this.sanitizer.bypassSecurityTrustUrl(objectURL);
    });
  }
}
