import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api-service.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit, OnDestroy {

  user: any;

  constructor(private apiService: ApiService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log("Bonjour");
    this.route.paramMap.subscribe(params => {
      const userId = params.get('id');
      if (userId) {
        this.apiService.getUser(userId).subscribe(user => {
          this.user = user;
        });
      }
    });
  }

  ngOnDestroy(): void {
    console.log("Bye Bye");
  }
}
