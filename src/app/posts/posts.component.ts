import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api-service.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  photo: any | null = null;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getSinglePhoto().subscribe((photo: any) => {
      this.photo = photo;
    });
  }
}
