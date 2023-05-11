import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiService } from '../api-service.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit, OnDestroy {

  posts: any;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    console.log("Bonjour");
    this.apiService.getPosts().subscribe(posts => {
      this.posts = posts;
    });
  }

  ngOnDestroy(): void {
    console.log("Bye Bye");
  }
}
