import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiService } from '../api-service.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit, OnDestroy {

  comments: any;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    console.log("Bonjour");
    this.apiService.getComments().subscribe(comments => {
      this.comments = comments;
    });
  }

  ngOnDestroy(): void {
    console.log("Bye Bye");
  }
}
